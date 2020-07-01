/*3 - En el ejercicio de la clase 2, numero 8, implementa la función creada en
**el ejercicio numero 2 de esta misma hoja, para realizar la detección de si un numero es primo o no*/

function esPrimo(numero) {

    for (let divisores = numero - 1; divisores >= 2; divisores--) {
        if (numero % divisores == 0) {
            return false;
        }
    }

    return true;
}

let maxNumbers = 100;

for (let number = 1; number <= maxNumbers; number++) {
    if (esPrimo(number) == true) {
        console.log(number);
    }
}