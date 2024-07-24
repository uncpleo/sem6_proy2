import React, { Children } from 'react'
import Padre from './Padre.jsx'

const Hijo = ({Children}) => {
    let nombre = "Leonardo"
    let element = <h4>Hola {nombre}</h4>
    let nEdad = 12
    let text
    if (nEdad<18) {
        text = <h4>Hola {nombre}, eres menor de edad</h4> 
    }
    let nEdad2 = 15
    const element2 = (nEdad2<18 ? "Es menor" : "Es mayor")
    return (
        <div>
            <div>Componente Hijo</div>
            <p>{Children}</p>
            {element}
            {text}
            <h4>{element2}</h4>
        </div>
    )
}

// export default Hijo

// import React from 'react'
// import Padre from './Padre.jsx'

// const Hijo = ({nombre, apellido}) => {
//   return (
//     <div>
//         <div>Componente Hijo</div>
//         <p>Nombre: {nombre}</p>
//         <p>Apellido: {apellido}</p>
//         <p>Carrera: {carrera}</p>
//     </div>
//   )
// }

export default Hijo