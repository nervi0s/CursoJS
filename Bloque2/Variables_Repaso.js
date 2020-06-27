const Pi = 3.1416; //el valor de Pi es inmutable ya que lo hemos definido como constante con 'const'
let sentimiento = "felicidad"; // variable mutable cuyo nombre o identificador es 'sentimento', de finida con 'let'

console.log(Pi);
console.log(sentimiento);

//Pi = 50; NO podemos hacer esto ya que hemos difinido a 'Pi' como constante, y por tanto, es inmutable
sentimiento = "tristeza"; // cambio de valor a la variable 'sentimiento'

console.log(Pi);
console.log(sentimiento);