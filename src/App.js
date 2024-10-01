//componente BotonClick
/*import React from "react";
import BotonClick from "./ButtonClick";

function App(){
  return (
    <div className="App">
      <h1 style={{color:'orange'}}>Proyecto 4</h1>
      <BotonClick ManejarClick/>
    </div>
  );
}
export default App;*/


//Formulario Usuario

/*import React from 'react';
import FormularioUsuario from './FormularioUsuario'; 

function App() {
  return (
    <div className="App">
      <h1 style={{color:'blue'}}>Formulario Usuario</h1>
      <FormularioUsuario /> 
    </div>
  );
}

export default App;*/

//Formulari y Resultado
import React, { useState } from "react";
import Formulario from './Formulario';
import Resultado from "./Resultado";

function App (){  
  const [nombre, setNombre]=useState(''); 
  const [numero, setNumero]=useState(''); 


  
  return (
    <div className="App">
      <h1 style={{color: "orange"}}>Formulario y Resultado</h1>
      <Formulario setNombre={setNombre} setNumero={setNumero} /> 
      <Resultado nombre={nombre} numero={numero} />
    </div>
  );
}
export default App;