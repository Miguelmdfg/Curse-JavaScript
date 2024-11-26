// Sellar un objeto

// Lo que hace "seal" es que no se pueden agregar ni eliminar propiedades, pero si se pueden modificar las existentes

"use strict";

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
}

Object.seal( producto );

console.log(producto);

// Si quieres saber si un objeto esta sellado entonces...:

console.log(Object.isSealed(producto));

