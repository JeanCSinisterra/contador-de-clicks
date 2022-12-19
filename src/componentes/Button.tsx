import React from "react";
import "../stylesheets/button.css"

function Button({ texto, esBotonDeClick, manejarClick }){
  return (
    <button 
    className={ esBotonDeClick ? "boton-click" : "boton-restart" }
    onClick={manejarClick}>
    {texto}
    </button>
  )
}

export default Button;