import React, {useState} from 'react'

import styled from '@emotion/styled';
//helpers y marcas
import { obtenerDiferenciaAnio, calcularAumentoPorContinenteDeOrigen, calcularPlan, primerLetraMayuscula} from '../helper';
import { Marcas } from '../Marcas';

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;
const Borde = styled.div`
  border: solid 1px black;
  padding: 1rem;
  background-color: aliceblue;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  cursor: pointer;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00838F;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: 0.5s ease;
  margin-top: 2rem;

  //:hover
  &:hover {
    cursor: pointer;
    background-color: #0b79d3;

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

const Formulario = ({setResumen, setCargando}) => {

  //Data
  const [datos, setDatos] = useState({
    continenteDeOrigen: '',
    marca: '',
    anio: '',
    plan: ''
  })

  //Error
  const [error, setError] = useState(false)

  //Destructuring obj datos
  const {continenteDeOrigen, marca, anio, plan} = datos;

  //handle change
  const obtenerDatos = e => {

    if (e.target.name === 'continenteDeOrigen'){
      //get contintente continente 
      const continente = e.target.value;
      //Segun continente traer marcas asociadas
      const arrayMarcas = Marcas[continente];

      //Obtener el elemento Select Marca
      const selectMarca = document.querySelector('#selectMarca');

      //Clean select
      selectMarca.innerHTML = '';

      
      let disabledOption = document.createElement('option');
      disabledOption.textContent = 'Seleccione una marca';
      disabledOption.setAttribute('hidden','')

      selectMarca.appendChild(disabledOption);
      arrayMarcas.forEach(marca => {
        //Crear el elemento Option
        let newOption = document.createElement('option');
        newOption.value = marca;
        newOption.textContent = primerLetraMayuscula(marca);
      //Insertar un option por cada marca en el input Marca
        selectMarca.appendChild(newOption);
      })
    }



    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }


  //Handle error and Submit
  const cotizarSeguro = e => {
    e.preventDefault();

    if(marca.trim() === '' || anio.trim() === '' || plan.trim() === ''){
      setError(true);
      return;
    }
    setError(false)

    //Base de 2000
    let resultado = 2000;

    //obtener la dif de anio seleccionado contra el actual
    const diferenciaAnio = obtenerDiferenciaAnio(anio);
  
    // por cada año de diferencia restar 3%
    const porcentaje = 3 * diferenciaAnio;
    resultado = resultado - (resultado * porcentaje / 100);

    //Calcular aumento segun Continente de Origen
    resultado = calcularAumentoPorContinenteDeOrigen(continenteDeOrigen) * resultado;

    //Calcular aumento segun plan
    resultado = calcularPlan(plan) * resultado
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


  }

  
  return (
    <form onSubmit={cotizarSeguro}>

      {/* Error case */}
      <Campo>
      { error ? <Error>Todos los campos son requeridos</Error> : null }
      </Campo>

      {/* Continente de Origen */}
      <Campo>
        <Label htmlFor="continenteDeOrigen">Continente </Label>
        <Select name="continenteDeOrigen" value={continenteDeOrigen} onChange={obtenerDatos}>
          <option value=""  disabled hidden>Seleccione el continente de origen</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      {/* Marca del Auto  */}
      <Campo>
        <Label htmlFor="marca">Marca</Label>
        <Select name="marca" id="selectMarca" value={marca} onChange={obtenerDatos}>
          <option value=""  disabled hidden>Seleccione un Continente</option>
        </Select>
      </Campo>

      {/* Año del Auto */}
      <Campo>
        <Label htmlFor="anio">Año</Label>
        <Select name="anio" value={anio} onChange={obtenerDatos}>
          <option value=""  disabled hidden>Seleccione una año</option>
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
        <Label htmlFor="plan">Plan:</Label>
      </Campo>
      <Borde>
      <Campo>
        <Label htmlFor="planBasico">Básico</Label>
          {/* Básico */}
          <InputRadio 
            type="radio" 
            name="plan" 
            value="basico" 
            id="planBasico" 
            checked={plan === 'basico'} 
            onChange={obtenerDatos}
          />
      </Campo>
      <Campo>
        <Label htmlFor="planIntermedio">Intermedio</Label>
          {/* Intermedio */}
          <InputRadio 
            type="radio" 
            name="plan" 
            value="intermedio" 
            id="planIntermedio" 
            checked={plan === 'intermedio'}
            onChange={obtenerDatos}
          />
      </Campo>
      <Campo>
        <Label htmlFor="planPremium">Premium</Label>
          {/* Premium */}
          <InputRadio 
            type="radio" 
            name="plan" 
            value="premium" 
            id="planPremium" 
            checked={plan === 'premium'}
            onChange={obtenerDatos}
          />
      </Campo>
      </Borde>

      <Boton type="submit">Cotizar</Boton>

    </form>
  )
}

export default Formulario
