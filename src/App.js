import React, {useState} from "react";

import Formulario from './components/Formulario'
import Header from "./components/Header";

import styled from "@emotion/styled";
import Resumen from "./components/Resumen";
import Resultado from './components/Resultado'
import Spinner from "./components/Spinner/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      anio: '',
      plan: '',
    }
  })

  const { datos, cotizacion } = resumen;


  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} />

        <Resumen datos={datos} />

        <Spinner />

        <Resultado cotizacion={cotizacion} />

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
