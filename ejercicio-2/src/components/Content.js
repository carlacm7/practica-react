import React from "react"  
import '../styles/Content.css';

function Content({texto,horas,minutos,segundos}){
    return (
        <div className="text-container">
            <h1 className='title'>{texto}</h1>
            <p>{horas}:{minutos}:{segundos}</p>
        </div>

    );
}

export default Content;

