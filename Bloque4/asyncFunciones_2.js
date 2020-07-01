/*Vamos a ver una manera de hacer que el programa se pare en absoluto, en completo, en seco, 
**para hacer la lectura del archivo,es decir, de manera SÍNCRONA.*/
const fs = require('fs');

let listaPokemons = fs.readFileSync("./pokemons.txt", "utf8");
console.log(listaPokemons);
/*readFileSync() si que retorna los datos leídos, no tiene un callback, esta función tiene un retorno.
**Esta funcón Síncrona, está bloqueando el programa, mientra lee los datos del archivo, los retorna,
**los guarda en la variable listaPokemons y después el programa continúa*/


/*Veamos lo que son las PROMESAS, una promesa ejecuta nuestro código de forma ASÍNCRONA, con la promesa de que
**en algún futuro nos de un resultado*/

/*Por ejemplo, una promesa nos permitiría leer un archivo de 50GB, que el programa esperase a la respuesta
**y que cuando la tuviese, la lanzase. (sin tener que hace el setTimeout() de antes)*/

/*Una promesa son funciones que esperan a un resultado, que puede tardar bastante en llegar, pero NO bloquea el
código*/

/*Las promesas sólo se pueden usar dentro de funciones que estén etiquetadas como asíncronas.
**Si queremos llamar a las promesas fuera de cualquier función. también tenemos que hacer una llamada
asíncrona de una función anónima*/

    /* async function nombreFun (){
        let datos = await cogerdatos.DeLaPagina('htt://mipag.com'),
    } */

    /* (async function () {
        let datos = await cogerdatos.DeLaPagina('htt://mipag.com');
    })(); */

/* const axios = require('axios');

async function obtenerDatosApiWeb(url) {
    let datosObtenidos = await axios.get(url);
    console.log(datosObtenidos);
}

console.log(obtenerDatosApiWeb("https://pokeapi.co/api/v2/pokemon/ditto")); */

const axios = require('axios');

//la función .get() de axios nos da un objeto con algunos atributos donde vemos info de una dirección web
//un atributo interesante en es .data, que en te caso nos da un objeto de un pokemon
//.data nos da el código htlm o source code de url en cuestión 

async function obtenerDatosApiWeb(url) {
    let datosObtenidos = await axios.get(url);
    //return datosObtenidos;
    return datosObtenidos.data;
}

(async function () {
    let pokeDatos = await obtenerDatosApiWeb("https://pokeapi.co/api/v2/pokemon/1");
    //console.log(pokeDatos);
    console.log(pokeDatos);
})();

console.log("YEEEEEEEEE");