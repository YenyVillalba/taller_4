import React from 'react';

function BotonClick (){
  const ManejarClick =()=>{
    alert ('¡Botón Clickeado!');
  };
  return (
    <button onClick={ ManejarClick}>Haz Click aquí</button>
  )
}
export default BotonClick;