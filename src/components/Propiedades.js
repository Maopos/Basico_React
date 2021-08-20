import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <h4>Esto es lo que pueden contener las props:</h4>
      <ol>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{"Arreglo: " + props.arreglo.join(", ") + "."}</li>
        <li>
          {"Objetos: " +
            props.objeto.nombre +
            " " +
            props.objeto.apellido +
            "."}
        </li>
        <li>{props.elementoReact}</li>
        <li>
          {"Funcion: " + props.arreglo.map(props.funcion).join(", ") + "."}
        </li>
        <li>{props.componenteReact}</li>
      </ol>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las props",
};

Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};
