const fs = require('fs');
const util = require('util')
const axios = require('axios');

const writeFilePromise = util.promisify(fs.writeFile); //promisify() para convertir CIERTAS funciones con callbacks en promesas
const fileReadPromise = util.promisify(fs.readFile);

const MaxDataPoke = 5;
let arrayObjPoke = [];

async function getDataJsonPoke(url) {
    console.log("Inicio obtención datos desde axios con la función GET");
    let objObtenido = await axios.get(url);
    return objObtenido.data;
}

async function createFiles(numDatos) {
    console.log("INICIO en WRITE");
    for (let i = 1; i <= numDatos; i++) {

        let data = await getDataJsonPoke("http://80.211.144.192:9582/api/pokemon/" + i);
        console.log(data);
        //delete data.name;
        //data.name = "jejejeje";
        try {
            await writeFilePromise("./poke" + i + ".json", JSON.stringify(data));
            console.log("Archivo creado", i);
        }
        catch{
            console.log(err);
        }
    }
    console.log("He creado todos los archivos")
    return true; //cuando haya creado TODOS los archivos indicados
}

async function readFiles() {
    let ok = await createFiles(MaxDataPoke);
    console.log(ok);
    console.log("ESTOY en READ");

    if (ok == true) {

        for (let i = 1; i <= MaxDataPoke; i++) {
            try {
                let dataFromFile = await fileReadPromise("./poke" + i + ".json", "utf8");
                console.log(dataFromFile, i);
                arrayObjPoke.push(JSON.parse(dataFromFile));
                console.log("Archivo leído", i);
            }
            catch{
                console.log(err);
            }
        }
    }
    console.log("He leído y pusheado todos los archivos");
    return true; //cuando haya leído TODOS los archivos indicados
}

async function start() {
    console.log("estoy en INICIO");

    let check = await readFiles();
    console.log(check);
    console.log("He pasado el check y me he asegurado de tener un array con los pokemons");

    // if (check == true) {
    //     console.log("MUESTRO EL ARRAY");
    //     console.log(arrayObjPoke);
    // }
    return true; // Por si neceisto usar ese valor en un futuro
}

(async function () {
    await start();
    console.log(arrayObjPoke, "YEEEEEE");



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
        let index = randomIndexCreator(0, MaxDataPoke);
        let pokeRandom = new Pokemon(
            arrayObjPoke[index].name,
            arrayObjPoke[index].hp,
            arrayObjPoke[index].type,
            arrayObjPoke[index].attack,
            arrayObjPoke[index].defense,
            arrayObjPoke[index].speed);
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
})();
