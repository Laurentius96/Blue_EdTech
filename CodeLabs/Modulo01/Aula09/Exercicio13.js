// ------------------- CodeLab (Aula 09) - Exercícios 13 ------------- \\

/* 

13 - Crie um programa que vai ler vários números e colocar em uma lista. Depois disso, crie duas listas extras que vão conter apenas os valores pares e os valores ímpares digitados, respectivamente. Ao final, mostre o conteúdo das três listas geradas.

*/
const prompt = require("prompt-sync")(); // permite usar o prompt.
var lista = [];
var listaPar = [];
var listaImpar = [];
var count01 = 0;

console.log();
while (count01 == 0) {
  console.log();
  let numero = prompt("      Digite se número: ");

  if (numero % 2 == 0) {
    lista.push(numero);
    listaPar.push(numero);
    console.log(`
       Número ${numero} adionado!
    `);
  } else if (numero % 2 > 0) {
    lista.push(numero);
    listaImpar.push(numero);
    console.log(`
       Número ${numero} adionado!
    `);
  } else {
    console.log(`
  Por favor digite um valor válido!
    `);
  }

  while (true) {
    console.log("Quer adicionar mais um número?");
    console.log("         [1 Para SIM]");
    console.log("         [2 Para NÃO]");
    let pergunta = +prompt("               ");
    if (pergunta === 1) {
      break;
    } else if (pergunta === 2) {
      count01++;
      break;
    } else {
      console.log();
      console.log("      Escolha invalida! ");
      console.log();
    }
  }
}

console.log(`
A lista de números escolhidos é: ${lista}
Os números pares da lista são: ${listaPar}
Os números ímpares da lista são: ${listaImpar}
`);
