//Convertir strings a Numeros 

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = "20";

console.log(Number.parseInt(numero1)); //De esta forma podemo convertir un string en un numero entero
console.log(Number.parseFloat(numero2)); //De esta forma convertimos un string en un numero flotante (Con decimales)
console.log(Number.parseInt(numero3)); //Esto nos devolvera NaN (Not a Number);

//Revisar si un numero es entero o no 

console.log(Number.isInteger(numero3));
console.log(Number.isInteger(numero4));

