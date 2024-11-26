//Como acceder a los valores de un objeto 

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

console.log(producto); //De esta manera nos reflejará todo lo que hay en el Objeto

console.log(producto.nombre) //Poniendo un punto luego del nombre del objeto podremos acceder a cada llave del interior

//Esta es otra forma de acceder a las llaves
console.log(producto['nombre']);