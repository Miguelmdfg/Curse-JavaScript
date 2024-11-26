// Destructuring de objetos

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    pago: "pago movil"
}

//Destructuring te permite extraer una llave con todo y el valor y que quede la variable, todo en un solo paso 
//Destructuring significa sacar de una estructura

const {nombre} = producto;
console.log(nombre)

const {precio} = producto;
console.log(precio)

//Tambien podemos extraer varias llaves de una vez

const {disponible, pago} = producto;

console.log(disponible);
console.log(pago);

// Destructuring extrae la llave pero tambien crea la variable dento del objeto
