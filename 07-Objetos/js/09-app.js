// Copiar objetos

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1Kg',
    medida: '1m',
}


console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas); //Utilizando ese metodo podremo unir ambos objetos en uno solo 

console.log(resultado);

// Existe otro metodo para hacerlo que se llama Spread operation o Rest operation

const resultado2 = { ...producto, ...medidas }; // Esos 3 puntos quieren decir que copie lo siguiente, y le pasamos lo que queremos copiar


console.log(resultado2);

