// Acceder a los valores de un Array

const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
console.table(numeros); //De esta forma nos mostrará en la consola una tabla que nos dirá el Index y el valor

//Acceder al arreglo

console.log( numeros [2] ); //Accedemos al numero 30
console.log( numeros [4] ); //Accedemos al numero 50

//Supongamos que hay un arreglo dentro de un arreglo

const numero = [10, 20, 30, 40, 50, [1, 2, 3]];

console.log(numero[5][2]); //Aqui estaremos accediendo al arreglo (su index es el 5), y a su vez, accedemos al subarreglo el cual en este caso elegimos el index 2 que tiene asignado el numero 3