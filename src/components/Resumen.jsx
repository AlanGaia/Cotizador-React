import React, { Fragment } from 'react'
import styled from '@emotion/styled';


const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #ffffff;
  margin-top: 1rem;
`;


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
