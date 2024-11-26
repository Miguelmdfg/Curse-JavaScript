//Inicializar una variable con un valor

var producto = "Monitor de 24 pulgadas";
console.log(producto);

//Las variables se pueden reasignar
producto = "Monitor de 19 pulgadas";
console.log(producto);

//JavaScript es un lenguaje de tipo dinámico, no se especifica tipo de dato

producto = 20;
console.log(producto);

//Se pueden inicializar sin valor y asignarlo después

var disponible;
disponible = true;

disponible = false;

//Inicializar múltiples variables

var categoria = 'Computadoras',
    marca= 'marca famosa',
    calificacion = 5;


//Las variables no pueden iniciar con números

//var 99dias; //Ésta no es la forma correcta
var dias99; //Ésta si es la forma correcta

//var 01_; //No se puede iniciar con numeros 
var _01;//Pero si se puede iniciar con guion bajo


var nombreProducto; //A esta forma se le llama Kamelcase
var nombre_producto; //A esta forma se le llama Underscore o Snake
var NombreProducto; //A esta forma se le llama Pascal Case


