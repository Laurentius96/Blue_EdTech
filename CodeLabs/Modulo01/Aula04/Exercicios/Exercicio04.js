/*

EXERCÍCIO 04
Faça um programa que pergunte ao usuário um número e valide se o número é
par ou ímpar:

Crie uma variável para receber o valor, com conversão para int
Para um número ser par, a divisão dele por 2 tem que dar resto 0

*/

const prompt = require("prompt-sync")(); // permite usar o prompt

console.log(`Seu número é par ou ímpar?\n`);
var num = prompt("Digite algum número: ");

if (num % 2 === 0) {
  console.log(`Seu número é PAR!!\n`);
} else {
  console.log("Seu número é IMPAR!!\n");
}
