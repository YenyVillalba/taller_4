import React from 'react';

function Formulario({ setNombre, setNumero }) {

    const manejarEnvio = (e) => {
        e.preventDefault(); 
        const nombre = e.target.nombre.value; 
    const numero = e.target.numero.value;

        alert(`Nombre: ${e.target.nombre.value}, Número: ${e.target.numero.value}`);
       
        setNombre('');
        setNumero('');
        e.target.nombre.value = ''; 
        e.target.numero.value = ''; 
      };
        
    

    return (
        <form onSubmit={manejarEnvio}>
            <input
                type='text'
                name="nombre"
                placeholder='Escriba el Nombre'
                onChange={(e) => setNombre(e.target.value)} />

            <input
                type="number"
                name="numero"
                placeholder="Escribe un número"
                onChange={(e) => setNumero(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    );
}
export default Formulario;