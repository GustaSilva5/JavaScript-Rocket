// Manipulando Strings e Numeros 


//Contar quantos caracteres tem uma palavra e quantos digitos tem um numero

let word = "Paralelepipedo"
console.log(word.length) // em palavras o length é uma propriedade e não um método

let number = 1234
console.log(String(number).length) // em números o length é um método e não uma propriedade

// Transformar um número quebrado  com 2 casas decimais e trocar ponto por vírgula

let number2 = 345.334234
console.log(number2.toFixed(2)) // toFixed é um método que arredonda o número para a quantidade de casas decimais que você passar como argumento

console.log(number2.toFixed(2).replace(".", ",")) // replace é um método que substitui um valor por outro, no caso substitui o ponto por vírgula

// Transformar letras minúsculas em maiúsculas. Faça o contrário disso também

let word2 = "Programar é muito bacana!"
console.log(word2.toUpperCase()) // toUpperCase é um método que transforma todas as letras de uma string em maiúsculas

console.log(word2.toLowerCase()) // toLowerCase é um método que transforma todas as letras de uma string em minúsculas

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Itachi é o melhor anti heroi dos animes"
let myArray1 = phrase.split(" ") // split é um método que transforma uma string em um array, onde o argumento passado é o separador
console.log(myArray1)
let phraseWithUnderscore = myArray1.join("_") // join é um método que transforma um array em uma string, onde o argumento passado é o separador

// Verificar se o texto contem a palabvra Naruto

let phrase2 = "Eu gosto de Samaurai X e Naruto"
console.log(phrase2.includes("Naruto")) // includes é um método que verifica se a string contém o argumento passado, não esquecer que ele é Case Sensitive (diferencia maiúsculas de minúsculas) isso pode trazer erros ao codigo

