// Manipulando Arrays

let techs = ["html", "css", "js"]

// Adicionar um item no fim
    techs.push("Angular")
    console.log(techs)

// Adicionar no começo
    techs.unshift("React Native")
    console.log(techs)

// Remover do fim
    techs.pop() 
    console.log(techs)

// Remover do começo
    techs.shift() 
    console.log(techs)

// Pegar somente alguns elementos do array
    console.log(techs.slice(1,3)) // pega do elemento 1 ao 3

// Remover 1 ou mais itens em qualquer posição do array
    techs.splice(0, 1) // a partir do elemento 1, remove 1 elemento
    console.log(techs)

// Encontrar a posição de um elemento no array
    let index = techs.indexOf("js")
    console.log(index)



// Diferença de slice, splice e split 
// slice = pega uma parte do array
// splice = remove ou adiciona elementos
// split = transforma uma string em um array


