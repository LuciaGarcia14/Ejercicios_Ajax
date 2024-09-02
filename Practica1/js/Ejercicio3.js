class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }
    consumir(jugador) {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
}
//creacion de la clase planta curativa que es herencia de la clase consumible
class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        super(nombre);
        this.poder = poder;
    }
    //metodo consumir al cual le pasamos como parametro un jugador, el cual es quien consume la planta curativa.
    consumir(jugador) {
        if ((this.poder + jugador.puntosVida) > jugador.maxPuntosVida) {
            console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto. Tiene "
                + jugador.puntosVida + " puntos de vida.");
        } else {
            jugador.puntosVida += this.poder;
        }
            console.log(jugador.nombre + " consume " + this.nombre + " y recupera " + this.poder + " puntos de vida. Tiene " + jugador.puntosVida + " puntos de vida.");
        }
    }


let manzana = new Consumible('Manzana');
let plantaCurativa = new PlantaCurativa('Planta Curativa', 4);

let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 6,
    maxPuntosVida: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
}
ricardo.consumir(manzana);
ricardo.consumir(plantaCurativa);
