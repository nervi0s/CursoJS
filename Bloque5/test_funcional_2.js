const fs = require('fs');
const axios = require('axios');

const MaxPokemons = 5;

async function getDataFromApi(url) { //Obtenemos datos con axios
    console.log("Inicio obtención datos desde axios con la función GET");
    let datos = await axios.get(url);
    return datos.data;
}
/*Sólo se debe ejecutar el código hasta la línea 19 lap primera vez, y el resto debe estar comentado
**luego se debe comentar esta función async anónima y descomentar el resto*/

/* (async function () { //Escribimos los archivos
    for (let i = 1; i <= MaxPokemons; i++) {
        let datosRecibidos = await getDataFromApi("http://80.211.144.192:9582/api/pokemon/" + i);
        fs.writeFileSync(i + "_pokemon.json", JSON.stringify(datosRecibidos));
        console.log("Archivo", i, "de", MaxPokemons, "escrito");
    }
})(); */

let arrayPokemonsData = [];

for (let i = 1; i <= MaxPokemons; i++) {
    arrayPokemonsData.push(JSON.parse(fs.readFileSync(i + "_pokemon.json", "utf8")));
}
//console.log(fs.readdirSync("./")); //Esto devuelve un array con los nombres de los ficheros del directorio
console.log(arrayPokemonsData);

//creación de las Clases
class Pokemon {
    constructor(name, life, type, attack, defense, speed) {
        this.name = name;
        this.life = life;
        this.type = type;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.isAtacker;
    }
    getName() {
        return this.name;
    }
    getLife() {
        return this.life;
    }
    getType() {
        return this.type;
    }
    getAttack() {
        return this.attack;
    }
    getDeffense() {
        return this.defense;
    }
    getSpeed() {
        return this.speed;
    }
    setLife(plusLife) {
        this.life = plusLife;
    }
}

class Stage {
    constructor(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
}

class Battle {
    constructor(stage, poke1, poke2) {
        this.stage = stage;
        this.poke1 = poke1;
        this.poke2 = poke2;
    }
    getStage() {
        return this.stage;
    }
    getPoke1() {
        return this.poke1;
    }
    getPoke2() {
        return this.poke2;
    }

    attack(fromPokemon, toPokemon) {
        let isKo = false;
        let lifeAfterAttack = toPokemon.getDeffense() + toPokemon.getLife() - fromPokemon.getAttack();
        console.log(fromPokemon.getName() + " ataca ha", toPokemon.getName());
        if (lifeAfterAttack <= 0 || lifeAfterAttack - toPokemon.getDeffense() <= 0) {
            toPokemon.setLife(0);
            console.log(toPokemon.getName(), "ha sido derrotado por", fromPokemon.getName());
            isKo = true;
        } else {
            toPokemon.setLife(lifeAfterAttack - toPokemon.getDeffense());
            console.log(toPokemon.getName(), "se queda ha", toPokemon.getLife(), "de vida");
            isKo = false;
        }
        return isKo;
    }
}

//funciones
function randomIndexCreator(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//console.log(randomIndexCreator(0,250));

function generateRandomStage() {
    let stage = ["water", "fire", "electric", "grass"]
    let index = randomIndexCreator(0, stage.length);
    return new Stage(stage[index]);
}

function generateRandomPokemon() {
    let index = randomIndexCreator(0, MaxPokemons);
    let pokeRandom = new Pokemon(
        arrayPokemonsData[index].name,
        arrayPokemonsData[index].hp,
        arrayPokemonsData[index].type,
        arrayPokemonsData[index].attack,
        arrayPokemonsData[index].defense,
        arrayPokemonsData[index].speed);
    return pokeRandom;
}

function stageDetector(stage, pokemon) {
    for (let i = 0; i < pokemon.getType().length; i++) {
        if (stage.toUpperCase() == pokemon.getType()[i].toUpperCase()) {
            return true;
        }
    }
}

function generateRandomBattle() {
    let stage = generateRandomStage();
    let pokemon1 = generateRandomPokemon();
    let pokemon2 = generateRandomPokemon();
    console.log("Batalla entre:", pokemon1.getName(), "y", pokemon2.getName());
    console.log("Estos son sus datos:", pokemon1, pokemon2);
    console.log("La batalla se desarrolla en un escenario de tipo:", stage.getType());

    let advantagePoke1 = stageDetector(stage.getType(), pokemon1);
    let advantagePoke2 = stageDetector(stage.getType(), pokemon2);

    if (advantagePoke1 == true) {
        pokemon1.setLife(pokemon1.getLife() + 150);
        console.log(pokemon1.getName(), "tiene ventaja en este escenario");
    }
    if (advantagePoke2 == true) {
        pokemon2.setLife(pokemon1.getLife() + 150);
        console.log(pokemon2.getName(), "tiene ventaja en este escenario");
    }

    let battle = new Battle(stage, pokemon1, pokemon2);

    let isKo = false;

    if (pokemon1.getSpeed() >= pokemon2.getSpeed()) {
        isKo = battle.attack(pokemon1, pokemon2);
        if (isKo == true) {
            return pokemon1;
        } else {
            let chanheAttacker;
            chanheAttacker = pokemon2;
            pokemon2 = pokemon1;
            pokemon1 = chanheAttacker;
            do {
                isKo = battle.attack(pokemon1, pokemon2);
                if (isKo == true) {
                    return pokemon1;
                } else {
                    let chanheAttacker;
                    chanheAttacker = pokemon2;
                    pokemon2 = pokemon1;
                    pokemon1 = chanheAttacker;

                }
            } while (isKo == false);

        }
    } else {
        isKo = battle.attack(pokemon2, pokemon1);
        if (isKo == true) {
            return pokemon2;
        } else {
            let chanheAttacker;
            chanheAttacker = pokemon1;
            pokemon1 = pokemon2;
            pokemon2 = chanheAttacker;
            do {
                isKo = battle.attack(pokemon2, pokemon1);
                if (isKo == true) {
                    return pokemon2;
                } else {
                    let chanheAttacker;
                    chanheAttacker = pokemon2;
                    pokemon2 = pokemon1;
                    pokemon1 = chanheAttacker;

                }
            } while (isKo == false);

        }
    }
}


console.log("Datos del ganador:", generateRandomBattle());
