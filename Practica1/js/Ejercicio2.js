class Zombi {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }

    atacar(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo.nombre} y le causa ${this.potencia} puntos de daño`);
    }
}
//creacion de la clase abominacion, hereda de la clase zombi.
class Abominacion extends Zombi {
    constructor(nombre, puntosVida, potencia) { 
        super(nombre, puntosVida, potencia); //elementos que heredamos de la clase zombi
    }

    //creamos la funcion de Ataque Multiple la cual le pasamos como parametro el objetivo
    ataqueMultiple(objetivo) {
        for (let i = 0; i < 3; i++) { //creamos un bucle para que el ataque se repita tres veces seguidas.
            super.atacar(objetivo); //llamamos a los elementos de la clase Padre y la funcion.
        }
    }
}

//creacion de un lugador
let jugador = { nombre: "Pedro", puntosVida: 100};
//creacion de una instancia abominación y insertamos los datos de esta
let abominacion = new Abominacion("Abominacion", 100, 10);


abominacion.ataqueMultiple(jugador);









