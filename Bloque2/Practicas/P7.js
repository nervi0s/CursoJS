//7 - Crear un programa que nos muestre los primeros 500 numeros de la secuencia fibonacci

let initialValue1 = 1;
let initialValue2 = 0;

let variableAlmacenAnterior;

for (let i = 1; i <= 15; i++) {
    if(i==1){
        console.log(0, " iteracion: "+ i);
    }else{
        variableAlmacenAnterior = initialValue1;
        initialValue1 = initialValue2 + initialValue1;
        initialValue2 = variableAlmacenAnterior;
        console.log(initialValue1, " iteracion: "+ i)
    }
}