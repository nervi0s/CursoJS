/*Vamos hacer lo del archivo anterior "asyncFunciones_3.js" pero en esta ocasión,
**vamos a recuperar los primeros 25 pokemons y los vamos a guardar cada uno en un archivo*/
const fs = require('fs');
const axios = require('axios');

async function obtenerDatos(url) {
    let datosPoke = await axios.get(url);
    return datosPoke.data;
}

(async function () {
    for (let i = 1; i <= 25; i++) {
        let datosRotativos = await obtenerDatos("https://pokeapi.co/api/v2/pokemon/" + i);

        fs.writeFile("./Pokemons/Pokemon_" + i + ".json", JSON.stringify(datosRotativos), function (err) {
            if (err == true) {
                console.log(err);
            } else {
                console.log("Archivo", i, "de", 25, "escrito");
            }
        })

    }
})();
