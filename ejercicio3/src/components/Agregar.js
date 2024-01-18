import React from "react"  
import '../styles/Agregar.css';

function Agregar({newValue,change,handleSubmit}){
    return (
        <div className="agregar" >
                <input type="text" placeholder="Add City" value={newValue} onChange={change}/>
                <button onClick={handleSubmit}>Add Tarea</button>
        </div>
    );
}

export default Agregar;