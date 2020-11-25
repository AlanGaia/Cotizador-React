import React from 'react'
import styled from '@emotion/styled';

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
`;

const Total = styled.p`
  background-color: rgb(29, 248, 95);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
`;


function Resultado({ cotizacion }) {


  return (
    (cotizacion === 0) ? 
      <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
      : 
      <Total>El total es: ${cotizacion}</Total>
  )
}

export default Resultado
