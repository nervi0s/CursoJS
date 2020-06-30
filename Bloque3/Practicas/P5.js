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