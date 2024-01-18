
import './App.css';
import {useState} from 'react';
import Content from './components/Content';
import Boton from './components/Boton';
function AppPrueba() {
  
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [start, setStart] = useState(true);
  
  const parar =()=> {
      setStart(!start);
    };
  const reiniciar =()=> {
      setTime(0);
    };

  const comenzar=()=>{
    while (start===true){
      if (segundos<59){
        setSegundos(segundos +1);
      }else{
        if (minutos<59){
          setMinutos(minutos +1);
          setSegundos(0);
        }else{
          setHoras(horas +1);
          setSegundos(0);
          setMinutos(0);
        };
      }
    }
  
    
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

export default AppPrueba;
