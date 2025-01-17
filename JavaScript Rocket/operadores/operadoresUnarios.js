/* Operadores Unários

    - typeof
    - delete

*/

const person = {
    name: 'Gustavo',
    age: 28
}

console.log(person) // vai me retornar o objeto person com nome e idade
delete person.age // vai deletar a propriedade age do objeto person
console.log(person) // vai me retornar o objeto person só com nome pois o age foi deletado
console.log(typeof 'Gustavo') // vai me retornar o tipo do que quero mostrar (string, number, object, etc)