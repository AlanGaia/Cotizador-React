import React from 'react'

const Header = ({titulo}) => {
  return (
    <header>
      <h1>{titulo} {titulo.length}</h1>
    </header>
  )
}

export default Header
