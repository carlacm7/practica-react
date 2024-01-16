
import './App.css';
import {useState} from 'react';

import Boton from './components/Boton.js'
import Contenido from './components/Contenido.js'

function App() {
  const [show, setShow] = useState(true)
  const mostrar =()=> {
    setShow(!show);
  }

  return (
    <div className="App">
      <div className="contenedor-principal">       
        <Boton texto="Mostrar/Ocultar" funcionClick={mostrar}/>
        <Contenido mostrar={show} texto="Wellcome to React Challenges"/> 
      </div>
    </div>
  );
}

export default App;
