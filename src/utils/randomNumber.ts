export const randomNumber = (min: number, max: number) => {

  const rango = max - min + 1;

  const random = Math.random();

  const numero = Math.floor(random * rango);

  const numeroFinal = numero + min;

  return numeroFinal;
}