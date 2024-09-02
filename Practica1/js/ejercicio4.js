let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Fernando", puntuacion: 105 },
    { nombre: "Laura", puntuacion: 210 },
    { nombre: "Julian", puntuacion: 520 },
];
 //creamos un nuevo array filtrando el anterior donde decimos que los jugadores con puntuacion mayor a 100 salgan por consola.
let mejoresJugadores = puntuaciones.filter(jugador => jugador.puntuacion > 100);

// Obtenemos los nombres de los mejores jugadores
let nombresMejoresJugadores = mejoresJugadores.map(jugador => jugador.nombre);

// Imprimimos los nombres de los mejores jugadores en la consola
console.log(nombresMejoresJugadores);