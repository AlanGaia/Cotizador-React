export function obtenerDiferenciaAnio(anio) {
   return new Date().getFullYear()- anio;
}

export function calcularMarca(marca) {
  let aumento;

  switch (marca) {
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