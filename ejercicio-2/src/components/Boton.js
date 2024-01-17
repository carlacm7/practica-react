import React from "react"  
import '../styles/Boton.css';

function Boton({texto,classBoton, funcionClick}){
    return (
        <button className={classBoton} onClick={funcionClick}> 
        {texto}
        </button>
    );
}

export default Boton;