// src/Resultado.js
import React from 'react';

function Resultado({ numero, nombre }) {
  return (
    <div>
      <p>El número ingresado es: {numero}</p>
      <p>El nombre ingresado es: {nombre}</p>

    </div>
  );
}

export default Resultado;
