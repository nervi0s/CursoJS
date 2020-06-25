//8 - Crear un programa que detecte los numeros primos existentes entre 0 y 1000000000 (1 Millon)

let maxNumbers = 1000000;

let detectaDivisibilidad = false;


for (let number = 1; number <= maxNumbers; number++) {
    for (let divisores = number - 1; divisores >= 2; divisores--) {
        if (number % divisores == 0) {
            detectaDivisibilidad = true;
        }
    }
    if (detectaDivisibilidad == false) {
        console.log(number)
    }
    detectaDivisibilidad = false;
}