import React from 'react'
import styled from '@emotion/styled';
import { primerLetraMayuscula } from '../helper';
import { LogosOBJ } from '../Logos'


const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #f8f8f8;
  color: #000000;
  border: solid 1px black;
  border-radius: 8px;
  margin-top: 1rem;
`;

const LogoMarca = styled.img`
  width: 200px;
  max-height: 200px;
`;

const ContainerUl = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

function Resumen({datos}) {

  //extraer datos
  const  {marca, anio, plan} = datos;
  if (marca === '' || anio === '' || plan === '') return null;


  // elegir logo segun marca 
  const src = LogosOBJ[marca] ?? null;

  
  return (
    <ContenedorResumen>
      <h2>Resumen de cotización</h2>
      <LogoMarca src={src}/>

      <ContainerUl>
        <li>Marca: <b>{ primerLetraMayuscula(marca) }</b></li>
        <li>Año: <b>{anio}</b></li>
        <li>Plan: <b>{ primerLetraMayuscula(plan) }</b></li>
      </ContainerUl>
    </ContenedorResumen>
  );
}

export default Resumen;
