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
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  color: #086917;
`;

const ContenedorTotal = styled.div`
  text-align: center;
  padding: .5rem;
  border: solid 2px rgb(29, 248, 95);
  background-color: #cbffd3;
  margin-top: 1rem;
  position: relative;
`;


function Resultado({ cotizacion }) {


  return (
    (cotizacion === 0) ? 
      <Mensaje>Elige marca, año y plan</Mensaje> 
      :
        (
          <ContenedorTotal>
            <Total>El total es: ${cotizacion}</Total>
          </ContenedorTotal>
        )
  )
}

export default Resultado
