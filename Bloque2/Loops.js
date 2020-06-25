let frutasFav = ["manzana", "pera", "fresa"];
console.log(frutasFav);
console.log(frutasFav[0]);

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 55; i <= 65; i++) {
    console.log(i);
    for (let j = 0; j <= 10; j++) {
        console.log(j);
    }
}

let j = 0;
for (let i = 55; i <= 65; i++) {
    console.log(i);
    console.log(j);
    j++;
}

let frase = ["Anoche", "vomite", "en", "los", "zapatos", "de", "un", "idiota"];
let palabrasCensuradas = ["vomite", "idiota"];

for (let i = 0; i < frase.length; i++) {
    for (let j = 0; j < palabrasCensuradas.length; j++) {
        if (frase[i] == palabrasCensuradas[j]) {
            console.log("Palabra censurada encontrada: " + frase[i]);
        }
    }
}


