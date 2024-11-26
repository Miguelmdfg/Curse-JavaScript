// Congelar un objeto para no poderlo modificar

// Para que el objeto no se pueda odificar debemos poner el modo estricto

"use strict";

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
}

// si queremos que el objeto no pueda ser modificado debemos utilizar lo siguiente:

Object.freeze( producto );

producto.disponible = false; //De esta forma no podemos modificar las propiedades del objeto 
producto.imagen = "imagen.jpg"; //Tampoco podremos añadir nada al objeto
delete producto.precio; //Por ultimo tampoco podremos eliminar nada del objeto

// Para saber si un objeto está congelado debemos hacer lo siguiente

console.log(Object.isFrozen(producto));




console.log(producto);