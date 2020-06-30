let temporal = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const MapaABC = temporal.split("");

console.log(MapaABC)

function cifrar(tipoRot, frase) {
    let fraseSplited = frase.split("");

    //console.log(fraseSplited);
    for (let i = 0; i < fraseSplited.length; i++) {

        let cambioRealizado = false;

        for (let j = 0; j < MapaABC.length; j++) {
            if (fraseSplited[i] == MapaABC[j] && cambioRealizado == false) {
                if (j != MapaABC.length - 1) {
                    fraseSplited[i] = MapaABC[j + tipoRot];
                } else {
                    fraseSplited[i] = MapaABC[tipoRot - 1];
                }
                cambioRealizado = true;
            }
        }
    }
    //console.log(fraseSplited);
    return fraseSplited;
}



function descifrar(tipoRot, fraseSpliteada) {
    for (let i = 0; i < fraseSpliteada.length; i++) {

        let cambioRealizado = false;

        for (let j = 0; j < MapaABC.length; j++) {
            if (fraseSpliteada[i] == MapaABC[j] && cambioRealizado == false) {
                if (j != 0) {
                    fraseSpliteada[i] = MapaABC[j - tipoRot];
                } else {
                    fraseSpliteada[i] = MapaABC[MapaABC.length - tipoRot];
                }
                cambioRealizado = true;
            }
        }
    }
    //console.log(fraseSpliteada);
    return fraseSpliteada;
}


let frase = "HOLA, SOY UN SECRETO";

let fraseCifrada = cifrar(1, frase);
console.log(fraseCifrada);
let fraseRecuperada = descifrar(1, fraseCifrada);
console.log(fraseRecuperada);

/*Hola Gir para cuando corrijas esto y veas el caos que he montado sorry 
por otra parte me gustaría saber si a partie de un array de caracteres como el que me
devuelve la función descifrar, puedo construir una frase como un String.
Un saludo y gracias!!!*/