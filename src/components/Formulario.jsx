import React from 'react'

const Formulario = () => {
  return (
    <form>

      {/* Marca del Auto  */}
      <div>
        <label htmlFor="marca">Marca</label>
        <select name="marca">
          <option value="" selected disabled hidden>Seleccione una marca</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </select>
      </div>

      {/* Año del Auto */}
      <div>
        <label htmlFor="anio">Año</label>
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
      </div>

      {/* Plan del Auto */}
      <div>
        <label htmlFor="plan">Plan</label>
        {/* Básico */}
        <input type="radio" name="plan" value="basico" id="planBasico"/>
        <label htmlFor="planBasico">Básico</label>
        {/* Intermedio */}
        <input type="radio" name="plan" value="intermedio" id="planIntermedio"/>
        <label htmlFor="planIntermedio">Intermedio</label>
        {/* Premium */}
        <input type="radio" name="plan" value="premium" id="planPremium"/>
        <label htmlFor="planPremium">Premium</label>
      </div>

      <button type="button">Cotizar</button>

    </form>
  )
}

export default Formulario
