import React, { Component } from 'react';
import './DottedBox.css';

class Banner extends Component {

  render(){
    if(this.props.info === "Su información se está cargando. Por favor espere."){
      return(<div>
        <p>Numero de páginas obtenidas: {this.props.num}</p>
      </div>);
    }
    else{
      return null;
    }
  }
}

export default Banner;