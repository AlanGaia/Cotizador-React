import React, { Fragment } from 'react'

function Resumen({datos}) {

  const  {marca, anio, plan} = datos;
  
  return (
    <Fragment>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>Año: {anio}</li>
        <li>Plan: {plan}</li>
      </ul>
    </Fragment>
  );
}

export default Resumen;
