import React, {useState} from "react";

import Formulario from './components/Formulario'
import Header from "./components/Header";

import styled from "@emotion/styled";
import Resumen from "./components/Resumen";
import Resultado from './components/Resultado'

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

  const { datos } = resumen;


  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} />

        {datos ?
          <Resumen datos={datos} />
          :
          null
        }

        <Resultado />

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
