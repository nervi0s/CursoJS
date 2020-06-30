//Creación de la primera función

function saludar() {
    console.log("Hola! Soy una función");
}

saludar(); // llamada a la función,si no se llama el programa no hace nada.

/* function suma() {
    let numberA = 3;
    let numberB = 9;
    let result = numberA + numberB;
    console.log(result);
}

suma();

//llamar a una función repetidas veces

for (let i = 1; i <= 5; i++) {
    suma();
}

///uso de parámetros en las funciones

let numberA = 100;
let numberB = 5;

function sumar(a,b){
    let result = a+b;
    console.log(result);
}
sumar(numberA,numberB);
sumar(5,3); */

//retornos de funciones

function sumaConRetorno(a, b) {
    let result = a + b;
    return result;
    console.log("Esto no se muestra porque el return acaba el flujo de ejecución de la función");
}

let numero1 = 5;
let numero2 = 88;

let resultadoDeLaSuma = sumaConRetorno(numero1, numero2);
console.log(resultadoDeLaSuma);

//funcion con varion retornos:

function esPar(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let numero = 9;
console.log(esPar(numero));

//funciones con callback (un call back es una función pasada por parámetro, que se ejecuta  cuando acaba otra)
/*Ej:
* LeerArchivo("pokemonLista",".txt", function (error, datos){códio...});
*
*
*/

function multiplicador(nA, nB, nC, nD) {
    let result = nA * nB * nC * nD;
    return result;
}

let elevacion = multiplicador(1, 2, 3, 4);
console.log(elevacion);

///

let nA = 4;
let nB = 5;
let nC = 2;
let nD = 8;

function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(sumaConRetorno(nA, nB), sumaConRetorno(nC, nD)));


///Ahora vemamos algunas funciones que ya contiene JS y que nos pueden ser de utilidad

let frutas = ["manzana", "naranja", "limon"];
console.log(frutas);
console.log(frutas.reverse()); //.reverse() esta función da la vuelta a un array pero modifica el arry de origen
console.log(frutas);

let paises = ["España", "Italia", "Francia", "Rusia", "Alemania"];
console.log(paises);
console.log(paises.sort()); //.sort() ordena, igualmente modifica el array sobre el que se usa
console.log(paises);

console.log(Math.round(4.2));
console.log(Math.round(4.8));
console.log(Math.ceil(4.2)); //redondea hacia el techo, hacia lo alto
console.log(Math.floor(4.2)); //redondea hacia el suelo, hacia lo bajo

console.log(Math.random()); //devuelve un valor aleatorio entre 0 y 1
console.log(Math.round(Math.random() * 100));

let frase = "Hola, soy una frase."; //métodos con Strings

console.log(frase.endsWith("."));
console.log(frase.includes("una"));
console.log(frase.startsWith("Hola"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

let fraseNueva = frase.replace("frase", "patata");
console.log(fraseNueva);
let fraseSplited = fraseNueva.split(" ");
console.log(fraseSplited);

//Método para añadir elementos a un array:
let frutasFav = ["manzana", "naranja", "limon"];
console.log(frutasFav);
frutasFav.push("banana"); //push muta el array frutasFav y añade una elemento a su contenido
console.log(frutasFav);


//Excluir las naranjas procedentes de Rusia

let naranajasAceptadas = []; //declaración de una array vacío
let naranjas = ["ES", "UK", "UKR", "MRC", "RUS", "GER"]

console.log(naranajasAceptadas);

for (let i = 0; i < naranjas.length; i++) {
    if (naranjas[i] != "RUS") {
        naranajasAceptadas.push(naranjas[i]);
    }
}

console.log(naranajasAceptadas);

//Operaciones con fileSysmtem de Node js

const fs = require('fs');

let numeroAleatorio = 12345678910;
fs.writeFile("./pruebafsNumerosAleatorios.txt", numeroAleatorio, function (err) {
    if (err == true) {
        console.log(err); //en caso de haber un error nos los muestra
    } else {
        console.log("El archivo ha sido escrito correctamente!!");
    }
});


fs.readFile("./pruebafsNumerosAleatorios.txt", 'utf8', function (errorObtenido, datos) {
    if (errorObtenido) {
        console.log(errorObtenido);
    } else {
        console.log(datos);
    }
});