//String methods - Repeat y Split

const producto = 'Monitor de 20 pulgadas';

//'.repeat' te va a permitir repetir una cadena de texto

const texto = 'en promocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);


//'.split' te va a permitir dividir un string

const actividad = 'Estoy aprendiendo Javascript moderno';
console.log(actividad.split(" "));

const hobbies = 'leer, Bailar, Escuchar musica, aprender a programar, dibujar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo Javascript #JSModernoConJuan";
console.log(tweet.split("#"))
