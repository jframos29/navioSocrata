import React from 'react';
import './App.css';
import navio from "navio";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  onClick() {
    fetch(this.state.value, {
      method: 'GET',
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => { return response.json(); })
      .then((responseJson) => {
        const nv=navio(this.aquiNavio,600);
        nv.data(responseJson);
      })
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.value} onChange={this.onChange.bind(this)} />
        <button onClick={this.onClick.bind(this)}>Enviar URL</button>
        <div ref={aquiNavio => this.aquiNavio = aquiNavio} />
      </div>
    );
  }
}

export default App
