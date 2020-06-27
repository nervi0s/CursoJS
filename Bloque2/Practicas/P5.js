/*5 - Recorrer la lista de ingredientes del restaurante y no mostrar los que coincidan con los alergenos.
//Ingredientes
let ingredienteRestaurante = ["kiwi","pimienta","pimiento","merluza","tomate","cacahuete","huevo","langosta","gambas","curry","curcuma","mantequilla","cebolla","cacao","harina","limon","aguacate","vainilla","miel","apio","salmon","atun","arroz"];
let alergenos = ["cebolla","gambas"];*/

let ingredienteRestaurante = ["kiwi", "pimienta", "pimiento", "merluza", "tomate", "cacahuete", "huevo", "langosta", "gambas", "curry", "curcuma", "mantequilla", "cebolla", "cacao", "harina", "limon", "aguacate", "vainilla", "miel", "apio", "salmon", "atun", "arroz"];
let alergenos = ["cebolla", "gambas"];


for (let i = 0; i < ingredienteRestaurante.length; i++) {
    
    let isMatch = false;

    for (let j = 0; j < alergenos.length; j++) {
        if (ingredienteRestaurante[i] == alergenos[j]) {
            isMatch = true;
            //console.log("NO PUEDES COMER ESTO")
        }
    }

    if (isMatch == false) {
        console.log(ingredienteRestaurante[i]);
    }
}
