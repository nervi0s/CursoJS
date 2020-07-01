//Creación de una Clase:

class Coche {

    constructor(color, velocidadPunta, nombre, deposito, ruedas) {
        this.color = color;
        this.velocidadPunta = velocidadPunta;
        this.nombre = nombre;
        this.deposito = deposito;
        this.ruedas = ruedas;
    }

    estadoRuedasOk() {
        for (let i = 0; i < this.ruedas.length; i++) {
            if (this.ruedas[i] != "ok") {
                return false;
            }
        }
        return true
    } //["ok", "ok", "ok" ,"ok"] ejemplo de la propiedad ruedas

    acelerar() {
        return "El coche: " + this.nombre + " está acelerando a la velocidad de: " + this.velocidadPunta + " Km/h";

    }
}

//Creación de una instancia u objeto de la Clase:

let miCoche = new Coche("Rojo", 250, "Rayo Mc", "50L", ["ok", "ok", "ok", "fail"]);
let miCoche2 = new Coche("Verde", 100, "Mate", "20L", ["ok", "ok", "ok", "ok"]);

console.log(miCoche.estadoRuedasOk())
console.log(miCoche.acelerar())
//console.log(miCoche.velocidadPunta)

console.log(miCoche2.estadoRuedasOk())
console.log(miCoche2.acelerar())

class personaje {

    constructor(vida, escudo, itemsCinturon, nombre) {
        this.vida = vida;
        this.escudo = escudo;
        this.itemsCinturon = itemsCinturon;
        this.nombre = nombre;
        this.atributoQueQuieroEnElConsrtruc = "Esto es un atributo secreto xD";
    }

    disparar() {

    }
    recibirDisparo(daño) {
        return this.vida - daño;
    }
    agacharse() {

    }
    getVida() {
        return this.vida;
    }
    setVida(vidaExtra) {
        this.vida = this.vida + vidaExtra;
    }
}

let personaje1 = new personaje(100);
personaje1.setVida(4)
console.log(personaje1.getVida())