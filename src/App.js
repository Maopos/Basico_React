import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosEs6 } from "./components/Eventos";
import { EventosEs7 } from "./components/Eventos";
import { MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CiclodeVida from "./components/CiclodeVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>

        <div>
          <hr />
          <br />
          <Componente msg="Hola soy un componente desde una prop"></Componente>
          <hr />
          <Propiedades
            cadena="Cadena de texto"
            numero={19}
            booleano={true}
            arreglo={["1", "2", "3", "4"]}
            objeto={{ nombre: "Mauricio", apellido: "Posada" }}
            elementoReact={<i>Elemento React.</i>}
            funcion={(num) => num * num}
            componenteReact={<Componente msg="Componente de React" />}
          ></Propiedades>
          <hr></hr>
          <Estado></Estado>
          <hr></hr>
          <RenderizadoCondicional></RenderizadoCondicional>
          <hr></hr>
          <RenderizadoElementos></RenderizadoElementos>
          <hr></hr>
          <EventosEs6></EventosEs6>
          <hr></hr>
          <EventosEs7></EventosEs7>
          <hr></hr>
          <MasSobreEventos></MasSobreEventos>
          <hr></hr>
          <ComunicacionComponentes></ComunicacionComponentes>
          <hr></hr>
          <CiclodeVida></CiclodeVida>
          <hr></hr>
          <AjaxApis></AjaxApis>
          <hr></hr>
          <ContadorHooks></ContadorHooks>
          <hr></hr>
        </div>
      </header>
    </div>
  );
}

export default App;
