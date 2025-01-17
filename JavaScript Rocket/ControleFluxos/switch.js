// Switch 

let ninja = 'Naruto';

switch (ninja) {
    case 'Naruto':
        console.log("Rasengan!");
        break;
    case 'Sasuke':
        console.log("Chidori!");
        break 
    case 'Sakura':
        console.log("Socão")
        break 
     default:
        console.log("Quem é voce ?")
    }

/*
Exercício
Agora que você já entendeu o básico, que tal tentar um exercício? 
Imagine que estamos em uma academia de ninjas. 
Crie um programa que utilize um switch para definir o tipo de treinamento que cada ninja vai receber. As opções são:

Naruto: Treinamento de Ninjutsu
Sasuke: Treinamento de Genjutsu
Sakura: Treinamento de Taijutsu
Kakashi: Treinamento de Estratégia

Se o ninja não for nenhum desses, o programa deve imprimir "Treinamento desconhecido".
*/    

let treinoNinja = 'Sakura';

switch (treinoNinja) {
    case 'Naruto':
        console.log("Treinamento de Ninjutsu")
        break
    case 'Sasuke':
        console.log("Treinamento de Genjutsu")
        break
    case 'Sakura':
        console.log("Treinamento medico") 
        break
    case 'Kakashi':
        console.log("Treinamento de Estratégia")
        break
    default :
        console.log("Treinamento desconhecido")
    }