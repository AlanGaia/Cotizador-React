import React from 'react'

function Resumen({datos}) {

  const  {marca, anio, plan} = datos;
  
  return (
    <>
    <h2>Resumen de cotización</h2>
    <ul>
      <li>Marca: {marca}</li>
    </ul>
    </>
  )
}

export default Resumen
