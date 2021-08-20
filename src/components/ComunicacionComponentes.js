import React, { Component } from "react";

export default class Padre extends Component {
state = {
    contador: 0
};

incrementarContador = () => {
    this.setState({
        contador: this.state.contador + 1
    })
}

  render() {
    return (
      <div>
        <h2>Comunicación entre Componentes.</h2>
        <p>Contador <b>{this.state.contador}</b></p>

        <Hijo incrementarContador= {this.incrementarContador} mensaje="Mensaje para el componente hijo 1"></Hijo>
        <Hijo incrementarContador= {this.incrementarContador} mensaje="Mensaje para el componente hijo 2"></Hijo>
      </div>
    );
  }
}

function Hijo(props) {
  return (
      <div>
          <p>{props.mensaje}</p>
          <button onClick={props.incrementarContador}>+</button>
      </div>
  )
}
