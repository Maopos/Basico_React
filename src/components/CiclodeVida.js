import React, { Component } from "react";

class Reloj extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    componentWillUnmount(){
        console.log(3, 'El componente ha sido eliminado del DOM.');
    }

    render(){
        return(
            <h3>{this.props.hora}</h3>
        )
    }
}

export default class CiclodeVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, aun no esta en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false
    };

    this.temporizador = null;
  }

  componentDidMount(){
      console.log(1, 'El Componente ya se encuentra en el Dom.'); 
  }

  componentDidUpdate(prevProps, prevState){
      console.log(2, 'El State o las props del Componente han cambiado'); 
       console.log(prevProps);
       console.log(prevState); 
  }

  

  segundero = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.segundero();
    this.setState({
        visible: true,
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
        visible:false
    })
  };

  render() {
    console.log(
      4, "El componente se dibuja o redibuja por algun cambio en el DOM"
    );

    return (
      <div>
        <h2>Ciclo de Vida de los Componentes de Clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora}></Reloj>}
        <button onClick={this.iniciar}>Play Time</button>
        <button onClick={this.detener}>Stop Time</button>
      </div>
    );
  }
}
