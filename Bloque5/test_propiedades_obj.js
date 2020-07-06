//Mutando propiedades de los objetos//
//////////////////////////////////////

//Tenemos un objeto del cual queremos modificar una determinada propiedad

/* let objeto = {
    "national_number": "1",
    "evolution": null,
    "sprites": {
        "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png",
        "large": "https://img.pokemondb.net/artwork/bulbasaur.jpg",
        "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
    },
    "name": "Bulbasaur",
    "type": [
        "Grass",
        "Poison"
    ],
    "total": 318,
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "sp_atk": 65,
    "sp_def": 65,
    "speed": 45
}

let arrayDePropiedades = [];

for (let propiedad in objeto) {
    arrayDePropiedades.push(objeto[propiedad])
}

arrayDePropiedades.reverse();

for (let i = 1; i <= 6; i++) {
    arrayDePropiedades.pop();
}

arrayDePropiedades.reverse();

console.log(arrayDePropiedades);

for (propiedad in objeto) {
    if (propiedad == "hp") {
        objeto[propiedad] += 1000; //1000 de vida extra
    }
}

let objs = {
    "national_numer": 22,
    "otraProp": 2,
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "sp_atk": 65,
    "sp_def": 65,
    "speed": 45
}
let arrayPropQueDeseoModificar = ["hp", "attack", "defense", "sp_atk", "sp_def", "speed"]


function editObject(obj, key, value) {
    let allValues = Object.values(obj)  // Todos los valores del objeto (Devuelve ARRAY)
    let allKeys = Object.keys(obj)      // Todas las propiedades del objeto (Devuelve ARRAY)
    //Recorremos todas las keys para encontrar la que queremos
    for (let i = 0; i < allKeys.length; i++) {
        //Si la encontramos, lo modificamos y lo retornamos
        if (allKeys[i] == key) {
            return obj[key] = value
        }
    }
}

for (let i = 0; i < arrayPropQueDeseoModificar.length; i++) {
    editObject(objs, arrayPropQueDeseoModificar[i], 100);
}

console.log(objs) */

/* let objs = [{
    "national_numer": 22,
    "otraProp": 2,
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "sp_atk": 65,
    "sp_def": 65,
    "speed": 45
}, {
    "national_numer": 41,
    "otraProp": 2,
    "hp": 43,
    "attack": 12,
    "defense": 54,
    "sp_atk": 64,
    "sp_def": 45,
    "speed": 23
}]



function editObject(obj, key, value) {
    let allValues = Object.values(obj) // Todos los valores del objeto (Devuelve ARRAY)
    let allKeys = Object.keys(obj) // Todas las propiedades del objeto (Devuelve ARRAY)
    //Recorremos todas las keys para encontrar la que queremos
    for (let i = 0; i < allKeys.length; i++) {
        //Si la encontramos, lo modificamos y lo retornamos
        if (allKeys[i] == key) {
            return obj[key] = value
        }
    }
}

for(let i = 0 ; i < objs.length ; i++){
    editObject(objs[i],"hp",25)
}

console.log(objs) */

let objs = [{
    "national_numer": 22,
    "otraProp": 2,
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "sp_atk": 65,
    "sp_def": 65,
    "speed": 45
}, {
    "national_numer": 41,
    "otraProp": 2,
    "hp": 43,
    "attack": 12,
    "defense": 54,
    "sp_atk": 64,
    "sp_def": 45,
    "speed": 23
}];

let arrayPropQueModifico = ["hp", "attack", "defense", "sp_atk", "sp_def", "speed"]

for (let i = 0; i < objs.length; i++) {
    for (let j = 0; j < arrayPropQueModifico.length; j++) {
        objs[i][arrayPropQueModifico[j]] += 100;
    }
}
console.log(objs);

/*
let objs = {
    "national_numer" : 22,
    "otraProp" : 2,
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "sp_atk": 65,
    "sp_def": 65,
    "speed": 45
}
let array=["hp","attack","defense","sp_atk","sp_def","speed"]

for (let i = 0; i < array.length; i++) {
    objs[array[i]]=Math.floor(objs[array[i]]*1.05)
}
console.log(objs)
*/