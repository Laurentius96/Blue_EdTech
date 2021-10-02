//-------------------- CodeLab (Aula 09) - Exercícios 12 -------------- \\

/* 

12 - Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem crescente. 

*/

const prompt = require("prompt-sync")(); // permite usar o prompt.

var lista = [];
var cont = 0;

while (cont == 0) {
  console.log();

  let numero = +prompt("Adicione um numero a lista: ");

  if (lista.indexOf(numero) === -1) {
    lista.push(numero);
    console.log(`O número ${numero} foi adicionado a lista!`);
    console.log();
  } else {
    console.log(`O número ${numero} já existe na lista!`);
    console.log();
  }

  let confirmacao = 0;
  while (confirmacao == 0) {
    console.log(`Quer adicionar mais um número?
         [1 Para Sim]
         [2 Para Não]`);
    let pergunta = +prompt("               ");

    if (pergunta === 1) {
      confirmacao++;
    } else if (pergunta === 2) {
      cont++;
      confirmacao++;
    } else {
      console.log("Escolha invalida...");
    }
  }
}
console.log(lista);
