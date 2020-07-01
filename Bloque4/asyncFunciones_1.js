/*JS inicia la llamada de las tareas o funciones según se las va encontrando en el programa
**una tarea puede llevar más tiempo que otra, y si por ejemplo, hacemos uso de los datos que devuelve esa
**tarea que tarda mucho en resolverse y el programa intenta mostrar un console.log de esos datos, lo mas 
**normal es que nos de algo undefined u otro resultado inesperado
*/

/*Una función que tiene un callback, no te retorna nada, sino que nos estará dando un valor a través de ese
**callback*/

//Esto de arriba es la forma de trabajar de manera ASÍNCRONA.

/*La forma de trabjar de manera SÍNCRONA, lo que haría es como dijimos arrima, JS inicia la llamada de las
**tareas o funciones según se las va encntrando en el programa y en lugar de que las tarés terminen sus ejecución
**de forma independiente, lo que hace la forma Síncrona es que no pasa a otra taréa hasta que se complete la que
**estamos haciendo, y por tanto, no se ejecuta el código que le sigue hasta que haya terminado su cometido,
**una vez haya terminado, entonces se seguirá ejecuntado el código que venga después*/

const fs = require('fs');

let listaPokemons = "---";

fs.readFile("./pokemons.txt", "utf8", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        listaPokemons = data;
    }
});

console.log(listaPokemons);
/*como podemos ver el consolse de arriba no muestra nada, ya que primero se llamda a la tarea readFile,
**luego se llamda a la tarea console.log y como la tarea de read aún no termina, pues no ha dado tiempo
a que la data se almacene en listaPokemons y la muestra --- como la hemos declarado más arriba */

//Veamos el método de JS llamada setTimeout()
//The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

setTimeout(function () {            //  setTimeout(() => {
    console.log(listaPokemons);     //      console.log(listaPokemons);
}, 1000)                            //  }, 1000);



