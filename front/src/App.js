import React from 'react';
import NavioComponent from './NavioComponent';
import Banner from './Banner';
import Banner2 from "./Banner2";
import './DottedBox.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      infoData: "No se ha ingresado la url!",
      historico: [],
      viz: false,
      numPagina: 0
    };
    this.value = "";
    this.url = "";
    this.numPagina = 0;
    this.onClick.bind(this);
  }

  componentDidMount() {
    fetch("/obtenerHistorico", {
      method: 'GET',
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
      }
    }).then((resultado) => {
      resultado.json().then((resp) => {
        this.setState({ historico: resp })
      });
    });
  }

  onChange(e) {
    this.value = e.target.value;
  }

  async onClickDelete() {
    await fetch("/borrarHistorico", {
      method: 'GET',
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const m= await fetch("/obtenerHistorico", {
      method: 'GET',
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
      }
    })
    const r= await m.json();
    await this.setState({ historico: r })
  }

  onClick(value) {
    return async () => {
      if(value===""){
        value=this.value;
      }
      if (value.length === 0) {
        alert("Debe ingresar una URL");
      }
      else {
        this.setState({ infoData: "Su información se está cargando. Por favor espere.", viz: false, numPagina: 0 });
        try {
          let limit = 100;
          let offset = 0;
          this.url = "" + value + "?$limit=" + limit + "&$offset=" + offset;
          let arr = [];
          const a = await fetch(this.url, {
            method: 'GET',
            credentials: "same-origin",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
          let json = await a.json();
          arr.push(json);
          let valor = json.length;
          while (valor !== 0) {
            let r = await new Promise((resolve, reject) => {
              setTimeout(this.auxiliar2(this.url, resolve), 300);
            });
            valor = r.length;
            arr.push(r);
            offset = offset + limit;
            this.url = "" + value + "?$limit=" + limit + "&$offset=" + offset;
            let rp = this.state.numPagina + 1;
            this.setState({ numPagina: rp });
          }
          const arr1 = arr.flat();
          await fetch("/enviarHistorico", {
            method: 'POST',
            credentials: "same-origin",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              url: value,
              fecha: new Date()
            })
          })
          await this.setState({ data: arr1, infoData: "OK", viz: true });
          fetch("/obtenerHistorico", {
            method: 'GET',
            credentials: "same-origin",
            headers: {
              'Accept': 'application/json',
            }
          }).then((resultado) => {
            resultado.json().then((resp) => {
              this.setState({ historico: resp })
            });
          });

        }
        catch (e) {
          console.log(e);
          this.setState({ infoData: "Hubo un error" });
        }
      }
    }
  }

  auxiliar2(url, resolve) {
    return async () => {
      const result = await fetch(url, {
        method: 'GET',
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const json = await result.json();
      resolve(json);
    }
  }

  render() {
    return (
      <div className="App">
        <h2>App de visualización de datos de Socrata con Navio</h2>
        <p>Seleccione una busqueda histórica en el histórico de peticiones o ingrese la URL en el campo y oprima el botón Enviar URL</p>
        <div className="bannerHistorial"><h3>Histórico de peticiones</h3><button onClick={this.onClickDelete.bind(this)}> Eliminar histórico disponible</button></div>
        <div className="historial">
          {this.state.historico.map((element) => {
            return <button onClick={this.onClick(element.url)}>Fecha: {element.fecha} url: {element.url}</button>;
          }
          )}
        </div>
        <input type="text" onChange={this.onChange.bind(this)} />
        <button onClick={this.onClick("")}>Enviar URL</button>
        <Banner info={this.state.infoData} />
        <Banner2 info={this.state.infoData} num={this.state.numPagina} />
        <NavioComponent visualizar={this.state.viz} data={this.state.data} ref={aquiNavio => this.aquiNavio = aquiNavio} />
      </div>
    );
  }
}

export default App;

