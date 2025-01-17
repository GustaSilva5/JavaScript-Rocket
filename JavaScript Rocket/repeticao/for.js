// Estrutura de repetição 
// For
// Break - para a execução do loop
// Continue - pula a execução do momento

// For de incremento 
for(let i = 0; i < 10; i++){
    console.log(i)
}

// For de decremento
for(let j = 100; j > 0; j--){
    console.log(j)
}

// For com break
for(let k = 100; k > 0; k--){
    console.log(k)
    if(k == 50){
        break
    }
}

// For com continue
for(let l = 10; l > 0; l--){
    if(l === 5){
        continue
    }
    console.log(l)
}