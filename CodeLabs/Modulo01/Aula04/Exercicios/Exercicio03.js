/*

EXERCÍCIO 03
Elabore um programa que recebe o seu nome, endereço e hobby e mostra cada
uma das informações da seguinte forma:
// Nome -> Letra maiúscula
// Endereço -> Letra minúscula
// Hobby -> Primeira letra maiúscula

Exemplo Entrada:
Nome: bruno fabri
Endereço: Rua ABC
Hobby: jogar cs

Exemplo Saída:
Nome: BRUNO FABRI
Endereço: rua abc
Hobby: Jogar cs


*/

const prompt = require("prompt-sync")(); // permite usar o prompt

var nome = prompt("Digite seu Nome: ").toUpperCase();
var end = prompt("Digite seu Endereço: ").toLowerCase();
var hobby = prompt("Digite seu Hooby: ").toLowerCase();
console.log(
  `\nNome: ${nome};\nEndereço: ${end};\nHobby: ${
    hobby[0].toUpperCase() + hobby.slice(1)
  }`
);
