import React from 'react'
import styled from '@emotion/styled';
import { primerLetraMayuscula } from '../helper';
import FordLogo from '../images/ford.png';
import MitsubishiLogo from '../images/mitsubishi.png';
import PeugeotLogo from '../images/peugeot.png';


const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #008f48;
  color: #ffffff;
  margin-top: 1rem;
`;

const LogoMarca = styled.img`
  width: 200px;
`;

function Resumen({datos}) {

  //extraer datos
  const  {marca, anio, plan} = datos;

  if (marca === '' || anio === '' || plan === '') return null;

  // elegir logo segun marca
  let src;
  switch (marca) {
    case 'americano': src = FordLogo; 
      break;
    
    default: null
      break;
    }
  
  
  return (
    <ContenedorResumen>
      <h2>Resumen de cotización</h2>
      <LogoMarca src={src}/>

      <ul>
        <li>Marca: { primerLetraMayuscula(marca) }</li>
        <li>Año: {anio}</li>
        <li>Plan: { primerLetraMayuscula(plan) }</li>
      </ul>
    </ContenedorResumen>
  );
}

export default Resumen;
