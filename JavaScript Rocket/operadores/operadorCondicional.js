// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes.

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top

let pao = true
let queijo = false

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)  // Café top

const niceBreakfast1 = pao || queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast1)  // Café top

// Maior de 18

let age = 19
const possoDirigir = age >= 18 ? 'Posso dirigir' : 'Não posso dirigir'
console.log(possoDirigir) 