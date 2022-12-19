import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Button from "./componentes/Button.tsx"
import Contador from './componentes/Contador.tsx';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks ] = useState(0);
  
  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const restartCount = () => {
    setNumClicks(0);
  }
  
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
        className="freecodecamp-logo"
        src={freeCodeCampLogo}
        alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador 
        numClicks={numClicks} />
        <Button
        texto="Click"
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Button 
        texto="Restart"
        esBotonDeClick={false}
        manejarClick={restartCount} />
      </div>
    </div>
  );
}

export default App;
