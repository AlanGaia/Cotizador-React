import React, { useState } from "react";
import styled from "@emotion/styled/macro";
//helpers y marcas
import { Marcas } from "../Marcas";
import {
  obtenerDiferenciaAnio,
  calcularAumentoPorContinenteDeOrigen,
  calcularPlan,
  primerLetraMayuscula,
} from "../helper";


const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const CardContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: rgba(102, 41, 214, 0.404);
  margin: 1rem;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 1rem;
  display:flex;
  padding: 2rem;
  width: 100%;
  justify-content: center;

  & label{
    background-color: rgba(102, 41, 214, 0.555);
    border: 2px solid white;
    padding: 1rem;
    cursor: pointer;
    transition: 300ms;
  }

  & label:hover{
    background-color: rgb(102, 41, 214);
  }
`;

const InputRadio = styled.input`
  margin: 0 1rem;
  opacity: 0;
  position: fixed;
  width: 0; 

  :checked + label  {
    background-color: rgb(78, 22, 184);
    font-size: 1.5rem;
    padding: 1.4rem;
  }
`;

const Label = styled.label`
  flex: 0 0 100px;
`;
const Borde = styled.div`
  border: solid 1px black;
  padding: 1rem;
  background-color: #f3f3f3;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  cursor: pointer;
  -webkit-appearance: none;
`;


const Boton = styled.button`
  background-color: #0b79d3;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: 0.5s ease;
  margin-top: 2rem;

  //:hover
  &:hover {
    cursor: pointer;
    background-color: #0ba4d3;
  }
`;

const Error = styled.div`
  background-color: #e21111;
  color: #ffffff;
  font-weight: bold;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

const Formulario = ({ setResumen, setCargando }) => {

  // Data initial state
  const initialStateDatos = {
    continenteDeOrigen: "",
    marca: "",
    anio: "",
    plan: "",
  };

  //Data
  const [datos, setDatos] = useState(initialStateDatos);

  //Error
  const [error, setError] = useState(false);

  //Destructuring obj datos
  const { continenteDeOrigen, marca, anio, plan } = datos;

  //handle change
  const obtenerDatos = (e) => {
    //Si cambia el continente o se selecciona el continente
    if (e.target.name === "continenteDeOrigen") {
      //Reset form
      setDatos({ initialStateDatos });
      //get continente
      const continente = e.target.value;
      //Segun continente traer marcas asociadas
      const arrayMarcas = Marcas[continente];
      //Obtener el elemento Select Marca
      const selectMarca = document.querySelector("#selectMarca");
      //Clean select Marca vaciar opciones
      selectMarca.innerHTML = "";

      //Agregar opcion de Seleccione marca
      let disabledOption = document.createElement("option");
      disabledOption.textContent = "Seleccione una marca";
      disabledOption.setAttribute("hidden", "");
      selectMarca.appendChild(disabledOption);

      //Agregar las marcas como opciones
      arrayMarcas.forEach((marca) => {
        let newOption = document.createElement("option");
        newOption.value = marca;
        newOption.textContent = primerLetraMayuscula(marca);
        selectMarca.appendChild(newOption);
      });

      // Reiniciar state y asignar el continente seleccionado
      setDatos({
        ...initialStateDatos,
        [e.target.name]: e.target.value,
      });
    } else {
      // Si el continente ya esta elegido
      setDatos({
        ...datos,
        [e.target.name]: e.target.value,
      });
    }
  };

  //Handle error and Submit
  const cotizarSeguro = (e) => {
    e.preventDefault();

    if (marca.trim() === "" || anio.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //Base de 2000
    let resultado = 2000;

    //obtener la dif de anio seleccionado contra el actual
    const diferenciaAnio = obtenerDiferenciaAnio(anio);

    // por cada año de diferencia restar 3%
    const porcentaje = 3 * diferenciaAnio;
    resultado = resultado - (resultado * porcentaje) / 100;

    //Calcular aumento segun Continente de Origen
    resultado =
      calcularAumentoPorContinenteDeOrigen(continenteDeOrigen) * resultado;

    //Calcular aumento segun plan
    resultado = calcularPlan(plan) * resultado;
    resultado = parseFloat(resultado).toFixed(2);

    //simular consumo de api con spinner
    setCargando(true);

    setTimeout(() => {
      //Elimina el spinner despues de 1.5 segundos
      setCargando(false);

      //Guardar resultado
      setResumen({
        cotizacion: resultado,
        datos,
      });
    }, 1500);
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {/* Error case */}
      <Campo>
        {error ? <Error>Todos los campos son requeridos</Error> : null}
      </Campo>

      {/* Continente de Origen */}
      <Campo>
        <Label htmlFor="continenteDeOrigen">Continente </Label>
        <Select
          name="continenteDeOrigen"
          value={continenteDeOrigen}
          onChange={obtenerDatos}
        >
          <option value="" disabled hidden>
            Seleccione el continente de origen
          </option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      {/* Marca del Auto  */}
      <Campo>
        <Label htmlFor="marca">Marca</Label>
        <Select
          name="marca"
          id="selectMarca"
          value={marca}
          onChange={obtenerDatos}
        >
          <option value="" disabled hidden>
            Debe elegir un continente primero
          </option>
        </Select>
      </Campo>

      {/* Año del Auto */}
      <Campo>
        <Label htmlFor="anio">Año</Label>
        <Select name="anio" value={anio} onChange={obtenerDatos}>
          <option value="" disabled hidden>
            Seleccione un año
          </option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>

      {/* Plan del Auto */}
      <Campo>
        <Label htmlFor="plan">Seguro:</Label>
      </Campo>
      <Borde>
        <Campo>
          <CardContainer>
          <Card>
          {/* Básico */}
          <InputRadio
            type="radio"
            name="plan"
            value="basico"
            id="planBasico"
            checked={plan === "basico"}
            onChange={obtenerDatos}
          />
          <label htmlFor="planBasico">Terceros</label>
          </Card>
        <Card>
          {/* Intermedio */}
          <InputRadio
            type="radio"
            name="plan"
            value="intermedio"
            id="planIntermedio"
            checked={plan === "intermedio"}
            onChange={obtenerDatos}
          />
          <label htmlFor="planIntermedio">Terceros con Granizo</label>
          </Card>
          <Card>
          {/* Premium */}
          <InputRadio
            type="radio"
            name="plan"
            value="premium"
            id="planPremium"
            checked={plan === "premium"}
            onChange={obtenerDatos}
          />
          <label htmlFor="planPremium">Todo Riesgo</label>
          
          </Card>
          </CardContainer>
        </Campo>
      </Borde>

      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};

export default Formulario;
