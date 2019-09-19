import React, { Component } from "react";
import "./DottedBox.css";

class Banner extends Component {

	render(){
		if(this.props.info === "No se ha ingresado la url!"){
			return (<p>{this.props.info}</p>);
		}
		else if(this.props.info === "Su información se está cargando. Por favor espere."){
			return(<div>
				<p>{this.props.info} </p>
				<div className ="ruedita"/>
			</div>);
		}
		else if(this.props.info === "Hubo un error"){
			return <p>{this.props.info}</p>;
		}
		else{
			return null;
		}
	}
}

export default Banner;