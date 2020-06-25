/*4 - Crear el juego "piedra, papel, tijeras". Debemos mostrar por consola el enfrentamiento entre los dos contrincantes.
ej "Jugador 1 : piedra, Jugador 2 = papel, Gana jugador 2"*/

let option = ["piedra", "papel", "tijeras"];
let player1 = option[2];
let player2 = option[0];
let comprobadorEntradaIf = false;


if (player1 == "piedra" && player2 == "tijeras") {
    comprobadorEntradaIf = true;
    console.log("Ha ganado el jugador 1!")
}
if (player1 == "papel" && player2 == "piedra") {
    comprobadorEntradaIf = true;
    console.log("Ha ganado el jugador 1!")
}
if (player1 == "tijeras" && player2 == "papel") {
    comprobadorEntradaIf = true;
    console.log("Ha ganado el jugador 1!")
}
if (player1 == player2) {
    comprobadorEntradaIf = true;
    console.log("Ha sido empate!");
} 
if (comprobadorEntradaIf == false) {
    console.log("Ha ganado el jugador 2!")
}