import react from 'react';
import '../hojas_de_estilos/boton.css'

function Boton({ texto, esBotonClick, manejarClic }) {
  return(
    <button className={esBotonClick ? "boton-clic" : "boton-reiniciar"}
    onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;