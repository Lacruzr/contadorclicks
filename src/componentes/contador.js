import React from "react";
import '../hojas_de_estilos/contador.css';
function Contador ({ numClic }){
    return(
        <div className='contador'>
            {numClic}
        </div>
    );
}
export default Contador;
