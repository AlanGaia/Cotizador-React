import React from 'react'
import styled from '@emotion/styled'

const ContenedorHeader = styled.header`
  background-color: #26C6DA;
`;

const Header = ({titulo}) => {
  return (
    <header>
      <h1>{titulo} {titulo.length}</h1>
    </header>
  )
}

export default Header
