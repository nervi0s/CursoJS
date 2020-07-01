const fs = require('fs');
const axios = require('axios');
/*Vamos a obtener un archivo remoto (que será un obj )y lo vamosa guardar en un archivo de manera
**local en nuestro equipo, hay que tener en cuenta la asincronía*/

/* async function getData (url){
    let datos = await axios.get(url);
    
    fs.writeFile("./Pokemon.json", datos ,function(err){
        if(err){
            console.log(err);
        }else{
            console.log(datos);
        }
    })
}

let url = "https://pokeapi.co/api/v2/pokemon/ditto"
getData(url); */

async function getData(url) {
    let datos = await axios.get(url);
    return datos.data;
}

let url = "https://pokeapi.co/api/v2/pokemon/ditto";

(async function () {
    let datosPoke = await getData(url);
    fs.writeFile("./Poke.json", JSON.stringify(datosPoke), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log(datosPoke);
        }
    });
})();


