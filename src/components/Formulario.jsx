import React, {useState} from 'react'

import styled from '@emotion/styled';

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
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
  background-color: #f76e6e;
  color: #ff0000;
  border: 2px solid #fa2f2f;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

const Formulario = () => {

  //Data
  const [datos, setDatos] = useState({
    marca: '',
    anio: '',
    plan: ''
  })

  //Error
  const [error, setError] = useState(false)

  //Destructuring obj datos
  const {marca, anio, plan} = datos;

  //handle change
  const obtenerDatos = e => {
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
      console.log('error');
      return;
    }
    setError(false)
    console.log('enviando');
  }

  
  return (
    <form onSubmit={cotizarSeguro}>

      {/* Error case */}
      { error ? <Error>Todos los campos son requeridos</Error> : null }

      {/* Marca del Auto  */}
      <Campo>
        <Label htmlFor="marca">Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerDatos}>
          <option value=""  disabled hidden>Seleccione una marca</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
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
        <Label htmlFor="plan">Plan</Label>
        {/* Básico */}
        <InputRadio 
          type="radio" 
          name="plan" 
          value="basico" 
          id="planBasico" 
          checked={plan === 'basico'} 
          onChange={obtenerDatos}
        />
        <Label htmlFor="planBasico">Básico</Label>
        {/* Intermedio */}
        <InputRadio 
          type="radio" 
          name="plan" 
          value="intermedio" 
          id="planIntermedio" 
          checked={plan === 'intermedio'}
          onChange={obtenerDatos}
        />
        <Label htmlFor="planIntermedio">Intermedio</Label>
        {/* Premium */}
        <InputRadio 
          type="radio" 
          name="plan" 
          value="premium" 
          id="planPremium" 
          checked={plan === 'premium'}
          onChange={obtenerDatos}
        />
        <Label htmlFor="planPremium">Premium</Label>
      </Campo>

      <Boton type="submit">Cotizar</Boton>

    </form>
  )
}

export default Formulario
