// El object constructor

// Object literal

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
}

// Object constructor

function producto2(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

// const producto2 = new producto('Monitor de 24 pulgadas', 500);
console.log(producto2);

