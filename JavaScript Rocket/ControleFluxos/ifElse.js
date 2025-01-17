// If Else

// if = se
// else = se não

let chakra = 100

if (chakra >= 20) {
    console.log('Você pode fazer um jutsu')
} else {
    console.log('Voc não pode fazer um jutsu')
}

// Else If

let chakraRasenga = 20

if (chakraRasenga >= 20) {
    console.log('Você pode fazer um jutsu')
} else if (chakraRasenga >= 10) {
    console.log('Você pode fazer um jutsu mais fraco')
} else {
    console.log('Voc não pode fazer um jutsu')
}

// Exemplo Temperatura 

let temperaturaAtual = 38
let temperaturaAlta = temperaturaAtual >= 37.5
let temperaturaMedial = temperaturaAtual < 37.5 && temperaturaAtual >= 37

if (temperaturaAlta){
    console.log('Febre Alta')
} else if (temperaturaMedial){
    console.log('Febre Moderada')
} else {
    console.log('Sem Febre')
}

