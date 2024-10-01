import React, { useState } from 'react';

function FormularioUsuario() {
   const [nombre, setNombre] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault(); 
    alert(`Nombre ingresado: ${nombre}`); 
    setNombre('');
  };

  return (
    <div>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Escriba el nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)} 
        />
        <button type="submit">Enviar</button>
       </form>
    </div>
  );
}

export default FormularioUsuario;

