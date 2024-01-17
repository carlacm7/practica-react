import React from "react"  
import '../styles/Lista.css';

function Lista(){
    return (
        <div className="list-container">
            <h2>To Do List</h2>
            <ul id="tarea-lista">
                <li>new</li>
                <button >X</button>
            </ul>
        </div>
    );
}

export default Lista;