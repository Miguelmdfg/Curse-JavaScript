// Destructuring de objetos anidados

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    pago: "pago movil",
    informacion:{
        medidad: {
        peso: '1kg',
        altura: '1m, 90cm'
        },
        fabricacion:{
            pais: 'China'
        }
    }
}

const { nombre, informacion, informacion: {fabricacion, fabricacion: { pais } } } = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);


//Ejercicios de práctica

const elValle = {
    edificios:{
        resDonPedro:{

            torreA: {
                persona: "Miguel Fuenmayor",
                animal: "Navi"
            },

            torreB: {
                persona2: "Felix Tovar",
                animal2: "Kanela",
            },

            torreC: {
                persona3: "Zuleika Godoy",
                animal3: "Carlitos Jr",
            },

             otroEspacio: {
                cancha: {
                    jugadores:{
                        equipo1: "Angel, Ruben, Moises, Javier",
                        equipo2: "Gerardo, José, Mathias, Alejandro",
                            banca: {
                                banca1: "Ricardo y Manuel",
                                banca2: "Camilo y Lucas"
                            }
                    }
                }   
            }
        }
    }
}   


// const {edificios, edificios: { resDonPedro, resDonPedro: { torreA, torreA: { persona, animal } } } } = elValle;

// const {edificios, edificios: {resDonPedro, resDonPedro: {otroEspacio, otroEspacio:{ cancha, cancha: { jugadores, jugadores: { banca, banca: { banca1, banca2 } } } } } } } = elValle;

const { banca1, banca2 } = elValle.edificios.resDonPedro.otroEspacio.cancha.jugadores.banca;