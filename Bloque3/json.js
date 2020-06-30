/* const fs = require('fs');

let obj = { //nos creamos una variable objeto
    "name": "David",
    "age": 30
};

fs.writeFile("pruebaJsonObj.json", JSON.stringify(obj), function (err) { //hacemos uso de JSON.stringify(miObjetoVar) para combertir eso en un String
    if (err == true) {
        console.log(err);
    } else {
        console.log("¡El archivo ha sido escrito!");
    }
});

fs.readFile("./pruebaJsonObj.json", "utf8", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

let objString = '{"name":"David","age":30}'; //continido del archivo creado antes, es un String
console.log(objString);
console.log(JSON.parse(objString), "<-- el String se ha convertido en una estructura de objeto de JS");

let objOK = (JSON.parse(objString)); //hacemos uso de JSON.parse(objEnString) para combertirlo en un objeto
console.log(objOK.age); */

const fs = require('fs');

//Accedemos a un archivo Json con datos de un pokemon
fs.readFile("./pruebaJsonObjApi.json", "utf8", function (err, data) {
    if (err == true) {
        console.log(err);
    } else {
        let objPokemon = JSON.parse(data) //convertimos esos datos de String a datos tipo Obj y lo guardamos
        console.log(objPokemon);

        let arrayNombresMovivmientos = [];

        for (let i = 0; i < objPokemon.moves.length; i++) { //imprimimos los nombre de todos los moviminetos del pokemon
            console.log(objPokemon.moves[i].move.name);
            arrayNombresMovivmientos.push(objPokemon.moves[i].move.name);
        }

        console.log(arrayNombresMovivmientos);
    }
});


