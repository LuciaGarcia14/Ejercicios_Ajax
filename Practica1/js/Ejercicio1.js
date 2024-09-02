class Jugador {
    constructor(nombre, ocupacion, puntosVida, faccion) {
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.puntosVida = puntosVida > 100 ? 100 : puntosVida;
        this.faccion = faccion;
        this.faccion = faccion;
    }
    //creamos una cadenas que nos devuelve el nombre, con el repectivo nombre, la ocupación, los puntos de vida y facción.
    toString() {
        return `Nombre: ${this.nombre}, Ocupación: ${this.ocupacion}, Puntos de Vida: ${this.puntosVida}, Facción: ${this.faccion}`;
    }
}

//creacion de los jugadores
let jugador1 = new Jugador("Jose", "Policía", 80, "Humano");
let jugador2 = new Jugador("Lucía", "Maestra", 120, "Humano");

//nos sale por consola cada uno de los datos de los jugadores.
console.log(jugador1.toString());
console.log(jugador2.toString());

