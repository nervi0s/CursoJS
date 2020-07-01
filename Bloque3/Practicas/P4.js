/*4 - Crea un generador de 1000000000(1M) de numeros aleatorios enteros,
**cuando uno de los numeros aleatorios sea creado y este sea un numero primo debemos
**guardar su valor en un array llamado "numerosPrimos", deberemos hacer lo mismo para detectar los "numerosPares"
**y guardar los numeros en formato JSON en dos archivos separados llamados "numerosPrimos.JSON"
**y "numerosPares.JSON". Requisitio: Usar minimo 2 funciones. Bonus: Hacer que los numeros no se repitan en sus respectivas listas*/


const fs = require('fs');

function esPrimo(numero) {
    for (let divisores = numero - 1; divisores >= 2; divisores--) {
        if (numero % divisores == 0) {
            return false;
        }
    }
    return true;
}

function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    return false;
}

function estaRepetido(numero, arrayNums) {
    for (let i = 0; i <= arrayNums.length; i++) {
        if (numero == arrayNums[i]) {
            return true;
        }
    }
    return false;
}

function guardarPrimos(ruta, datos) {
    fs.writeFile(ruta, datos, function (err) {
        if (err == true) {
            console.log(err);
        } else {
            console.log("El archivo ha sido escrito correctamente!!");
        }
    });
}

function guardarPares(ruta, datos) {
    fs.writeFile(ruta, datos, function (err) {
        if (err == true) {
            console.log(err);
        } else {
            console.log("El archivo ha sido escrito correctamente!!");
        }
    });
}

function generaNumerosRandom(cantidad, cifrasMaximas) {
    let numerosPrimos = [];
    let numerosPares = [];
    let numeroGenerado;

    for (let i = 1; i <= cantidad; i++) {
        numeroGenerado = (Math.round(Math.random() * Math.pow(10, cifrasMaximas)));
        //console.log(numeroGenerado)
        if (esPrimo(numeroGenerado) == true) {
            //console.log("Primo encontrado", numeroGenerado);
            if (estaRepetido(numeroGenerado, numerosPrimos) == false) {
                numerosPrimos.push(numeroGenerado);
            }
        }

        if (esPar(numeroGenerado) == true) {
            //console.log("Par encontrado", numeroGenerado);
            if (estaRepetido(numeroGenerado, numerosPares) == false) {
                numerosPares.push(numeroGenerado);
            }
        }
    }
    //console.log(numerosPrimos);
    //console.log(numerosPares);
    guardarPrimos("./numerosPrimos.json", numerosPrimos);
    guardarPares("./numerosPares.json", numerosPares);
}

/*el primer parámetro indica la cantidad de nums randoms
* el segundo parámetro la cantidad máxima de cifras de estos*/

generaNumerosRandom(10, 1);
