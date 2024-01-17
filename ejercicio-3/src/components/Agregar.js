import React from "react"  
import '../styles/Agregar.css';

function Agregar({agregarTarea}){
    return (
        <div className="agregar">
        <input className='escribir' type="text" name="text" id="nueva-tarea" placeholder="Add City"/>
        <button onclick={agregarTarea}>Agregar Tarea</button>
        </div>
    );
}

export default Agregar;