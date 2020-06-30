function esPrimo(numero) {

    for (let divisores = numero - 1; divisores >= 2; divisores--) {
        if (numero % divisores == 0) {
            return  false;
        }
    }

    return true;
}

let number = 11311;
console.log("El número: ", number, "¿es primo? =",esPrimo(number));