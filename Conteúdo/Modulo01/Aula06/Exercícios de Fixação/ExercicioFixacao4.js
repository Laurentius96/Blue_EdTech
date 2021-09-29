const prompt = require('prompt-sync')(); // permiteo uso do prompt.
//==== Exercícios de Fixação 04 ====\\

/*
    1. Crie um script que pergunte 3 números ao usuário (usando for!), 
    coloque em um array, depois exiba tal array.

    2. Depois use um for para percorrer esse Array, e pergunte para o usuário o novo valor que ele quer colocar em cada posição. 
    (Por exemplo: "Digite um novo valor para a posição 1", 
    "Digite um novo valor para a posição 2", etc...). Substitua o valor a 
    lista original, para o novo valor entrado pelo usuário."

*/

// // Criei um alista com 3 elemntos para o meu for rodar 3 vezes. Não 

let lista = [0,0,0];
var listafinal = [];
var count = 0;

for (let i of lista){ // vai rodar os 3 elementos da arraw.
    let novoelento = prompt("Digite um valor:");
    listafinal.push(novoelento);
}
console.log(listafinal);

for (let i of listafinal){
    let novovalor = prompt(`Digite um novo valor para posição ${count}, que era ${i}: `);
    listafinal.splice(count, 1, novovalor);
    count += 1;
}

console.log(listafinal);
