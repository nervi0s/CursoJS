const fs = require('fs');
const axios = require('axios');

const MaxDataPoke = 10;
let arrayObjPoke = [];

async function getDataJsonPoke(url) {
    let objObtenido = await axios.get(url);
    return objObtenido.data;
}

async function createFiles(numDatos) {
    console.log("estoy en WRITE")
    for (let i = 1; i <= numDatos; i++) {

        let data = await getDataJsonPoke("http://80.211.144.192:9582/api/pokemon/" + i);
        //delete data.name;
        //data.name = "jejejeje";
        fs.writeFile("./poke" + i + ".json", JSON.stringify(data), function (error) {
            if (error) {
                console.log(error);
            } else {
                console.log("Archivo creado", i);
            }
        });
    }
    return true; //cuando haya creado todos los archivos indicados
}

async function readFiles() {
    let ok = await createFiles(MaxDataPoke);
    console.log("estoy en READ")
    if (ok == true) {
        for (let i = 1; i <= MaxDataPoke; i++) {

            fs.readFile("./poke" + i + ".json", "utf8", function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data, i);
                    arrayObjPoke.push(JSON.parse(data));
                    console.log("Archivo leído", i);
                }
            });

        }
    }
    return true; //cuando haya leído todos los archivos indicados
}

(async function () {
    console.log("estoy en INICIO")
    let check = await readFiles();
    console.log("He pasado el check")
    console.log(check)

    if (check == true) {
        console.log(arrayObjPoke);
    }

})();
