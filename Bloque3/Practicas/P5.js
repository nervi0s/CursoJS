//5 - Lee el archivo pokemons.txt y devuelve un array de todos los pokemons

const fs = require('fs');

fs.readFile("./pokemons.txt", "utf8", function (err, datos) {
    let listaPokeSplited;

    if (err) {
        console.log(err);
    } else {
        listaPokeSplited = datos.split("-");
    }
    console.log(listaPokeSplited);
    return listaPokeSplited;
});