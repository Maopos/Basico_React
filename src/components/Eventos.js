import React, { Component } from "react";

export class EventosEs6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar() {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <div>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
          <br></br>
        </div>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Properties Initializer

export class EventosEs7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow functions

  sumar = () => {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = () => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <div>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
          <br></br>
        </div>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

function Boton(props) {
  return(<button onClick={props.myOnClick}>Boton hecho componente</button>)
}

export class MasSobreEventos extends Component {
  
  //Evento Sintetico
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
    }
  
  render(){
    return(
      <div>
        <h2>Mas sobre Eventos</h2>
        <button onClick={(e) => this.handleClick(e, "Hola parametro desde un evento")}>Saludar</button>
        {/* Evento Personalizado */}
        <Boton myOnClick={(e) => this.handleClick(e, "Hola con boton desde un componente")}></Boton>
      </div>
    )
  }
}