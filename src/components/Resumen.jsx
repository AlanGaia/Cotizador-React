import React from 'react'
import styled from '@emotion/styled';
import { primerLetraMayuscula } from '../helper';


const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #008f48;
  color: #ffffff;
  margin-top: 1rem;
`;


function Resumen({datos}) {

  const  {marca, anio, plan} = datos;
  
  return (
    <ContenedorResumen>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: { primerLetraMayuscula(marca) }</li>
        <li>Año: {anio}</li>
        <li>Plan: { primerLetraMayuscula(plan) }</li>
      </ul>
    </ContenedorResumen>
  );
}

export default Resumen;
