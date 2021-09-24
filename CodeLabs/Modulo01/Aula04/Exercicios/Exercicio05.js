/*

EXERCÍCIO 05

Parte 1
Faça um script que peça um valor e mostre na tela se o valor é positivo ou
negativo.

Parte 2
Agora implemente a funcionalidade de não aceitar o número 0, no input.

*/

const prompt = require("prompt-sync")(); // permite usar o prompt

console.log(`Seu número é POSITIVO ou NEGATIVO?\n`);

var contador;

while ((contador = 0)) {
  let num = prompt("Digite algum número: ");
  if (num == 0 || num == "" || num == " ") {
    console.log("Por favor digite um número válido...");
    contador = 1;
  } else {
    if (num > 0) {
      console.log(`Seu número é POSITIVO!!\n`);
      contador++;
    } else {
      console.log("Seu número é NEGATIVO!!\n");
      contador++;
    }
  }
}
