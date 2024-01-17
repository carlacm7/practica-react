import React from "react"  
import '../styles/Content.css';

function Content({texto,time}){
    return (
        <div className="text-container">
            <h1 className='title'>{texto}</h1>
            {time}
            {/*<p>{horas}:{minutos}:{segundos}</p>*/}
        </div>

    );
}

export default Content;

