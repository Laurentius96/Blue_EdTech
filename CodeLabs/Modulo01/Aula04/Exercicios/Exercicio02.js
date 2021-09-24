/*

EXERCÍCIO 02

Escreva um programa que solicite uma frase ao usuário e escreva a frase toda
em maiúscula e sem espaços em branco.

*/
const prompt = require("prompt-sync")(); // permite usar o prompt
// // ----->  /\s+/g


var texto = (prompt("Por favor, digite um texto: ").toUpperCase()).replace(/\s+/g,"");
console.log(texto);