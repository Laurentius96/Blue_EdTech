//-------------------- CodeLab (Aula 07) - Exercício 02 -------------- \\

/*
2. Criar uma função que junte dois arrays e retorne o resultado como um novo array.
*/

const prompt = require("prompt-sync")();

var lista01 = ["Ana", "Bruno", "Carla", "Duda"];
var lista02 = ["Erica", "Felipe", "Gustavo", "Henrique"];
var novaLista = lista01.concat(lista02);
console.log(novaLista);

// // use o "flat" para retirar um array dentro de outro 
// // outra forma:

for (let i of lista01) {
  novaLista.push(i);
}
for (let i of lista02) {
  novaLista.push(i);
}

