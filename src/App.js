import logo from './logo.svg';
import './App.css';
import freecodelogo from './imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import {useState}  from 'react';

function App() {

const [numClic, setNumClics] = useState(0);


  const manejarClic=()=> {
    setNumClics(numClic + 1); 
  }
  const reiniciarContador=()=> {
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className='freecodecam-logo-contenedor'>
        <img className='freecodecam-logo'
        src={freecodelogo}
        alt='Logo Freecodecamp '/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClic ={numClic}/>
        <Boton
          texto='Click'
          esBotonClick={true}
          manejarClic={manejarClic}/>
        <Boton
          texto='Reiniciar'
          esBotonClick={false}
          manejarClic={reiniciarContador}/>
      </div>
     
    </div>
  );
}

export default App;
