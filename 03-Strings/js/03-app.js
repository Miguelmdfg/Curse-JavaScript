//Concatenar dos líneas o dos strings en uno solo 

//En el siguiente ejemplo utilizamos '.concat' para concatenar

const producto = 'Monitor 20 pulgadas';
const precio = '30 USD';

console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));


//Tambien podemos concatenar usando el simbolo de '+' como se muestra a continuacion

console.log(producto + ' con un precio de ' + precio);
console.log('El producto ' + producto + ' tiene un precio de ' + precio);

//Tambien podemos concatenar usando template literals '${}', pero en vez de comillas deben ser "``"
 
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);


