//Strings methods - Replace, Slice, Substring

/*Utilizamos ".replace" para reemplazar partes de un string, primero colocamos la palabra que cambiaremos entre comillas
y luego seguido de una coma colocaremos entre comillas el texto por el cual lo cambiaremos*/

const producto = 'Monitor de 30 pulgadas';

console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

/*Utilizamos ".slice" para cortar, dentro de parentesis le pasamos el numero cadena donde queremos empezar a cortar, seguido
de una coma y ponemos el numero donde queremos terminar de cortar*/

console.log( producto.slice(0, 10) );
console.log( producto.slice(8) ); //Lo que hará aqui es contar 8 espacios y cortará todo lo que venga despues de ello 
console.log( producto.slice(2, 1) ); //Si el primer numero es mayor al segundo no hara nada

//Alternativa a "slice", se llama "Substring"

console.log( producto.substring(0, 10) ); //Si vemos, se comporta igual que el primer ejemplo que hicimos en slice
console.log( producto.slice(2, 1) ); /*Si tratamos de hacer esto aqui nos damos cuenta de que subtring es mas inteligente 
                                        y lo que hace es cambiarlo, es decir el lo lee como si estuviera (1, 2)*/
 