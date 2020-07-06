//Ejemplos para entender las promesas y la forma async

function esperarPromesa(sec) {
    return new Promise((resolve, reject) => {
        console.log("ok esperarPromesa terminada")
        setTimeout(() => {
            resolve(true);
        }, 1000 * sec);
    })
}

function esperarNormal(sec) {
    console.log("ok esperarNormal terminada");
    setTimeout(() => {
        return true;
    }, 1000 * sec);
}

(async function () {

    for (let i = 1; i <= 5; i++) {

        esperarNormal(3);
        //await esperarPromesa(3);
            //console.log("prueba")
        //esperarPromesa(3);
    }
})()

//Convirtiendo un callbkac en una promesa, pasa usar luego async - await

/*
const fs = require('fs')
const { isRegExp } = require('util')


function readFilePromise(){
    return new Promise((resolve, reject) => {
        fs.readFile('./foodsCleanLong.txt', 'utf8', function(err,data){
            if(err){
                throw err;
            }
            
            resolve(data)
        })
    })
}



(async function () {
    for (let i = 0; i < 15; i++) {
        let readFewTimes =  readFilePromise(); //ver la diferencia entre porner await delante de readFilePromise() y no ponerlo
        console.log(readFewTimes)
        console.log("HOLA")
    }
})()
*/