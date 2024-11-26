//El objeto Math

let resultado;

//PI
resultado = Math.PI;

//Redondear
resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.6);
resultado = Math.round(2.5);

//Redondear hacia arriba

resultado = Math.ceil(2.1);

//Redondear hacia abajo

resultado = Math.floor(2.8);

//Raiz cuadrada

resultado = Math.sqrt(678);

//Valor absoluto

resultado = Math.abs(-500);

//Potencia

resultado = Math.pow(18, 6);

//Minimo 

resultado = Math.min(2,5,7,3,1);

//Maximo

resultado = Math.max(2, 5, 3, 3, 8);

//Aleatorio

resultado = Math.random() * 20; //Numero ramdom entre 0 y 20 (Puede tener numeros flotantes)

resultado = Math.floor(Math.random() * 30); // Obtendremos un valor aleatorio redondeado hacia arriba entre el 0 y el 30 (solo numeros enteros)


console.log(resultado)