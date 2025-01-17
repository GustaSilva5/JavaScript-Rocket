/*
    function() constructor

    * expressao new
    * criar um novo objeto
    * this keyword

*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

//estanciar um objeto
const Gustavo = new Person("Gustavo")
const Giovana = new Person("Giovana")
console.log(Gustavo.walk())
console.log(Giovana.walk())