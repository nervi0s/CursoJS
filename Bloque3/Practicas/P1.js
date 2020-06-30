function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}

function calculadora(num1, num2, operacion) {
    let resultado;
    if (operacion == "sumar") {
        resultado = sumar(num1, num2);
        return resultado;
    } else if (operacion == "restar") {
        resultado = restar(num1, num2);
        return resultado;
    } else if (operacion == "multiplicar") {
        resultado = multiplicar(num1, num2);
        return resultado;
    } else if (operacion == "dividir") {
        resultado = dividir(num1, num2);
        return resultado;
    } else {
        return "Operacion incorrecta";
    }
}

let numero1 = 2;
let numero2 = 3;
let operacion = "multiplicar"

console.log(calculadora(numero1,numero2,operacion));