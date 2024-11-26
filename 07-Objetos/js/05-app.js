//Objetos dentro de Objetos

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    pago: "pago movil",
    informacion:{
        peso: '1kg',
        altura: '1m, 90cm'
    }
}

console.log(producto)

console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.altura);

// Los objetos pueden ser tan complejos y extensos como sean necesarios