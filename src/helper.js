export function obtenerDiferenciaAnio(anio) {
   return new Date().getFullYear()- anio;
}

export function calcularAumentoPorContinenteDeOrigen(continenteDeOrigen) {
  let aumento;

  switch (continenteDeOrigen) {
    case 'europeo':
      aumento = 1.30;
      break;
    case 'americano':
      aumento = 1.15;
      break;
    case 'asiatico':
      aumento = 1.05;
      break;
    default:
      break;
  }

  return aumento;
}

export function calcularPlan(plan) {
  let resultado;

  switch (plan) {
    case 'basico':
      resultado = 1.20;
      break;
    case 'intermedio':
      resultado = 1.35;
      break;
    case 'premium':
      resultado = 1.50;
      break;
    default:
      break;
  }

  return resultado;
}

export function primerLetraMayuscula( texto ) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}