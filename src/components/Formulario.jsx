import React from 'react'

import styled from '@emotion/styled';

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Formulario = () => {
  return (
    <form>

      {/* Marca del Auto  */}
      <Campo>
        <Label htmlFor="marca">Marca</Label>
        <select name="marca">
          <option value="" selected disabled hidden>Seleccione una marca</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </select>
      </Campo>

      {/* Año del Auto */}
      <Campo>
        <Label htmlFor="anio">Año</Label>
        <select name="anio">
          <option value="" selected disabled hidden>Seleccione una año</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </select>
      </Campo>

      {/* Plan del Auto */}
      <Campo>
        <Label htmlFor="plan">Plan</Label>
        {/* Básico */}
        <input type="radio" name="plan" value="basico" id="planBasico"/>
        <Label htmlFor="planBasico">Básico</Label>
        {/* Intermedio */}
        <input type="radio" name="plan" value="intermedio" id="planIntermedio"/>
        <Label htmlFor="planIntermedio">Intermedio</Label>
        {/* Premium */}
        <input type="radio" name="plan" value="premium" id="planPremium"/>
        <Label htmlFor="planPremium">Premium</Label>
      </Campo>

      <button type="button">Cotizar</button>

    </form>
  )
}

export default Formulario
