function esPrimo(numero) {

    for (let divisores = numero - 1; divisores >= 2; divisores--) {
        if (numero % divisores == 0) {
            return  false;
        }
    }

    return true;
}

let maxNumbers = 100;

for (let number = 1; number <= maxNumbers; number++) {
  if(esPrimo(number)==true){
      console.log(number);
  }
}