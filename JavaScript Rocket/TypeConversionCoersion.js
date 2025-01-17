/*
    Type conversion (typecasting) vs Type coersion


    * Alteração de um tipo de dado para outro tipo
*/

console.log('9' + 5) // 95 - Coersion pois ele forcou o 5 a ser uma string
console.log(Number('9') + 5) // 14 - Type conversion pois ele converteu a string '9' para number 9

// Manipulando strings e números
// Transformar string em número e número em string
let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))