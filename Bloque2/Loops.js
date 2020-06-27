let frutasFav = ["manzana", "pera", "sandía"];
console.log(frutasFav); //vemos el contenido entero de la variable array frutasFav
console.log(frutasFav[0]); //vemos el contenido de la primera posición de la variable array frutasFav

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

/*Escribe un bucle for, que muestre por pantalla una cuenta desde el numero 55 hasta el 65*/

for (let i = 55; i <= 65; i++) {
    console.log(i);
}


let j = 0;
for (let i = 55; i <= 65; i++) {
    //console.log(i,j);
    console.log(i);
    console.log(j);
    j++;
}

for (let i = 55; i <= 65; i++) {
    console.log(i);
    for (let j = 0; j <= 10; j++) {
        console.log(j);
    }
}

/* let j = 1;
let e = 10;

for (let i = 55; i <= 65; i++) {
    console.log(i);
    for (j; j <= e; j++) {
        console.log(j);
    }
    e += 10;
} */

let frase = ["Anoche", "vomité", "en", "los", "zapatos", "de", "un", "idiota"];
let palabrasCensuradas = ["vomité", "idiota"];

/* console.log(frase);
for (let i = 0; i < frase.length; i++) {
    for (let j = 0; j < palabrasCensuradas.length; j++) {
        if (frase[i] == palabrasCensuradas[j]) {
            frase[i] = "gatito";
        }
    }
}
console.log(frase); */

/*Tenemos que recorrer el array frase en busca de las palabras censuradas.
Cuando encontremos una palabra censurada, deberemos mostar por consola
"Palabra censurada encontrada : <LaPalabra>"*/

for (let i = 0; i < frase.length; i++) {
    for (let j = 0; j < palabrasCensuradas.length; j++) {
        if (frase[i] == palabrasCensuradas[j]) {
            console.log("Palabra censurada encontrada: " + palabrasCensuradas[j])
        }
    }
}