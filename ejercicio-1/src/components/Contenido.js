import React from "react"  
import '../styles/Contenido.css';

function Contenido({texto, mostrar}){
    return (
        mostrar ? <h1 className='content'>{texto}</h1>:null
    );
}

export default Contenido;