(async function () {
    const axios = require('axios');
    const fs = require('fs');


    //obtenemos el objeto prpocionado por el método .get() de axios, concretamente obtenemos el valor del atributo data
    async function getPekemonData(url) {
        let pokemonData = await axios.get(url);
        return pokemonData.data;
    }

    let maxPokemonData = 150;
    let arrayDeObjPokemon = [];

    //creamos 250 archivos .json con los datos de los primeros 250 pokemons
    console.log("ASYNC")
    for (let i = 1; i <= maxPokemonData; i++) {
        console.log(i)
        let urlApiPokemon = await getPekemonData("http://80.211.144.192:9582/api/pokemon/" + i);
        console.log(urlApiPokemon)
        let s = fs.writeFileSync("./PokemonScraped/" + i + "_" + "pokemon.json", JSON.stringify(urlApiPokemon));
    }
    //almacenamiento de los datos en formato tipo obj dentro de un array 
    for (let i = 1; i <= maxPokemonData; i++) {
        arrayDeObjPokemon.push(JSON.parse(fs.readFileSync("./PokemonScraped/" + i + "_pokemon.json", "utf8")));
    }
    console.log("hay", arrayDeObjPokemon.length, "pokemons");




    //console.log(fs.readdirSync("./PokemonScraped/","utf8"));

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
        let stage = ["water", "fire", "electrical", "grass"]
        let index = randomIndexCreator(0, stage.length);
        return new Stage(stage[index]);
    }

    function generateRandomPokemon() {
        let index = randomIndexCreator(0, maxPokemonData);
        console.log(index)
        let pokeRandom = new Pokemon(
            arrayDeObjPokemon[index].name,
            arrayDeObjPokemon[index].hp,
            arrayDeObjPokemon[index].type,
            arrayDeObjPokemon[index].attack,
            arrayDeObjPokemon[index].defense,
            arrayDeObjPokemon[index].speed);
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