
import './App.css';
import Agregar from './components/Agregar.js'
import Lista from './components/Lista.js'
function App() {
  const agregarTarea=()=>{
    var tarea=document.getElementById("nueva-tarea").value;
    var nuevoItem=document.createElement("li"); 
    nuevoItem.textContent=tarea;
    document.getElementById("tarea-lista").appendChild(nuevoItem);
  }
  return (   
    <div className="App">
      <Agregar agregarTarea={agregarTarea}/>
      <Lista/>
    
    </div>
  );
}

export default App;
