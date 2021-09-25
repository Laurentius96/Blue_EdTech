/*

EXERCÍCIO 05

Parte 1
Faça um script que peça um valor e mostre na tela se o valor é positivo ou
negativo.

Parte 2
Agora implemente a funcionalidade de não aceitar o número 0, no input.

*/

const prompt = require("prompt-sync")(); // permite usar o prompt

var contador = 0;
var num;

console.log(`\nSeu número é POSITIVO ou NEGATIVO?\n`);

while (contador == 0) {
  num = prompt("Digite algum número: ");
  if (num == 0 || num == "" || num == " ") {
    console.log("Por favor digite um número válido...");
  } else {
    contador ++;
  }
}

if (num > 0) {
  console.log(`\nSeu número é POSITIVO!!\n`);
} else {
  console.log(`\nSeu número é NEGATIVO!!\n`);
}
