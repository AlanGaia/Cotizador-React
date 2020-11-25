import React from 'react'

function Resultado({ cotizacion }) {

  if (cotizacion === 0) return null;

  return (
    <h1>Resultado {cotizacion}</h1>
  )
}

export default Resultado
