import React from 'react'
import Hijo from './Hijo'

const Padre = () => {
    let nombre = "Mandujano"
    let carrera = "Chespi"
    return (
        <div>
            <div>Componente Padre</div>
            <Hijo></Hijo>
        </div>
    );
}

// const Padre = () => {
//     let nombre = "Mandujano"
//     let carrera = "Chespi"
//     return (
//         <div>
//             <div>Componente Padre</div>
//             <Hijo nombre="Nilton" apellido={nombre} carrera={carrera}/>
//         </div>
//     );
// }


export default Padre;
