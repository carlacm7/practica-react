
import './App.css';
import {useState,useEffect} from 'react';
import Content from './components/Content';
import Boton from './components/Boton';
function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(()=>{
    let intervalo;
    if(start===true){
      intervalo=setInterval(()=>setTime(time+1),1000);
    }
    return ()=> clearInterval(intervalo)
  },[start,time]);
  const horas= Math.floor(time/3600);
  const minutos= Math.floor((time%3600)/60);
  const segundos= Math.floor(time%60);
  const comenzar=()=>{
    setStart(!start);
  };
  const parar=()=>{
    setStart(!start);
  };

  const reiniciar =()=> {
      setTime(0);
  };

  
  
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Content texto="Timer" segundos={segundos} minutos={minutos} horas={horas}/>        
        <div className='contenedor-botones'>
          <Boton texto="Start" classBoton="start" funcionClick={comenzar}/>
          <Boton texto="Stop" classBoton="stop"  funcionClick={parar}/>
          <Boton texto="Restart" classBoton="restart" funcionClick={reiniciar}/>
        </div>

      </div>
   
    </div>
  );
}

export default App;
