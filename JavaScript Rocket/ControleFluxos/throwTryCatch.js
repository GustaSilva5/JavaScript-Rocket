// Throw (lançar uma exceção quando algo dá errado) 

// try...catch (tentar...pegar) -> Tratar a exceção


//Neste exemplo, quando o inimigo é Orochimaru, o código lança uma exceção com a mensagem 'Ataque surpresa! É o Orochimaru!'.

//A exceção é lançada com a palavra-chave throw. Quando uma exceção é lançada, o código para de ser executado e o controle é passado para o bloco catch mais próximo. 

function enfrentarInimigo(inimigo) {
    if (inimigo === 'Orochimaru') {
      // Lançando uma exceção quando o inimigo é Orochimaru
      throw 'Ataque surpresa! É o Orochimaru!';
    } else {
      console.log(`Enfrentando ${inimigo} com coragem!`);
    }
}

//Mas um verdadeiro ninja sabe como lidar com ataques surpresa. Usamos try...catch para tentar executar um bloco de código e capturar qualquer exceção lançada, respondendo apropriadamente. Por exemplo:


  try {
    // Tentando enfrentar Orochimaru
    enfrentarInimigo('Orochimaru');
  } catch (error) {
    // Capturando e lidando com a exceção
    console.log(`Captei um erro: ${error}`);
  }
  
  
/*
Conceito de throw e try...catch em JavaScript

throw:

Imagine que throw é como um grito de alerta de um ninja quando ele encontra um perigo. Quando algo dá errado no seu código, você pode usar throw para lançar uma "exceção" (um erro), avisando que algo deu errado.

try...catch:

try é como um escudo que um ninja usa para tentar realizar uma tarefa perigosa, sabendo que pode falhar.

catch é a parte em que o ninja reage se algo der errado e ele precisar lidar com o problema.*/
  
  


