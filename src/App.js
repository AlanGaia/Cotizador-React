import React, {useState} from "react";

import Formulario from './components/Formulario'
import Header from "./components/Header";

import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {

  const [resumen, setResumen] = useState({})


  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
