/*5 - Sumar cadenas de texto, que previamente estan guardadas en variables de la forma mas eficiente posible,
usando las menos variables posibles(se valora el uso de const o let)
y de modo que se muestren las siguientes frases por consola. (Sin Arrays)
-Tengo perros
-Tengo frio
-Tengo calor
-Tengo ganas de comer sandia
-Tengo ganas de comer paella
-Tengo ganas de comer 
-Quiero frio
-Quiero calor
-Quiero sandia
-Quiero paella
-Quiero perros
*/

const verbo1 = "Tengo";
const verbo2 = "Quiero";
const frase = "ganas de comer";
const animal = "perros";
const temperatura1 = "calor";
const temperatura2 = "frío";
const comida1 = "sandía";
const comida2 = "paella";

let resultado = verbo1+" "+animal;
console.log(resultado);
resultado = verbo1+" "+temperatura1;
console.log(resultado);
resultado = verbo1+" "+temperatura2;
console.log(resultado);
resultado = verbo1+" "+frase+" "+comida1;
console.log(resultado);
resultado = verbo1+" "+frase+" "+comida2;
console.log(resultado);
resultado = verbo2+" "+temperatura2;
console.log(resultado);
resultado =verbo2+" "+temperatura1;
console.log(resultado);
resultado =verbo2+" "+comida1;
console.log(resultado);
resultado = verbo2+" "+comida2;
console.log(resultado);
resultado =verbo2+" "+animal;
console.log(resultado);