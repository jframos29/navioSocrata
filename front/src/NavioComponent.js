import React, { Component } from 'react';
import navio from "navio";

class NavioComponent extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      const nv = navio(this.divNavio, 600);
        nv.data(this.props.data);
        nv.addAllAttribs();
    }
  }

  render(){
    if(this.props.visualizar){
    return (<div ref={divNavio=> this.divNavio=divNavio}>
    </div>);}
    else{
      return null;
    }
  }
}

export default NavioComponent;