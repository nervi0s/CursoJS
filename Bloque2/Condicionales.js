/* console.log("Yo estoy fuera de cualquier corchete");

if (1 == 1) {
    console.log("Esto es verdad");
}

console.log("Yo estoy fuera de cualquier corchete"); */

///------ veamos el else (lo que se ejecuta en caso de no ser cierta la afirmacón del if)

/* if (5 == 1) {
    console.log("Esto es cierto");
} else {
    console.log("Esto no es verdad");
}

console.log("Yo estoy fuera de cualquier corchete"); */

///------ veamos el uso de variables con los condicionales If

/* let clima = "soleado";

if (clima != "llueve") {
    console.log("Salgo a dar un paseo");
} else {
    console.log("No salgo de casa");
} */

/* let comandoQueQuieroDetectar = "!normas";
let mensajeEscritoPorUnUsuario = "Hola";

if (mensajeEscritoPorUnUsuario == comandoQueQuieroDetectar) {
    console.log("Norma: No se puede escribir con mayúsculas");
} else {
    console.log("No se está usando el comando !normas");
} */

/* let tiempo = "lluvioso";

if (tiempo == "soleado") {
    console.log("salgo de casa");
} else {
    console.log("Me quedo dentro de casa");
} */

///------ Operaciones con operadores lógicos

/*Si esta lloviendo y mi nivel de pereza es alto. No salgo a la calle. 
Y si el resto de condiciones no se cumplen, salgo a la calle*/

let elTiempo = "lluvia";
let nivelDePereza = "alto";

if (elTiempo == "lluvia") {

    if (nivelDePereza == "alto") {
        console.log("No voy a salir a la calle");
    }

} else {
    if (nivelDePereza != "alto") {
        console.log("Salgo a dar un paseo")
    }
}

/*Si una de las condiciones no se cumple salgo a dar un paseo*/

if (elTiempo == "lluvia" && nivelDePereza == "alto") {
    console.log("No voy a salir a la calle");
} else {
    console.log("Salgo a dar un paseo");
}

if (elTiempo == "soleado" || nivelDePereza == "bajo") {
    console.log("Salgo a dar un paseo")
} else {
    console.log("No voy a salir a la calle");
}

/*Otro ejemplo*/

let pais = "UK";

if (pais == "FR" || pais == "ES" || pais == "UK" || pais == "RU") {
    console.log("Abrimos fronteras");
} else {
    console.log("No abrimos ninguna frontera");
}

let mayorDe18 = true;
let tieneCovid = false;
let procedencia = "UK"

if (procedencia == "UK" && mayorDe18 == true && tieneCovid == false) {
    console.log("Abrimos fronteras, pasa al pais");
} else {
    console.log("No abrimos ninguna frontera");
}