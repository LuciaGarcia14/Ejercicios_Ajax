class Zombi {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }
    atacar(objetivo) {
        console.log(
            `${this.nombre} ataca a ${objetivo.nombre} y le causa ${this.potencia} puntos de daño`
        );
    }
}