//-------------------- CodeLab (Aula 07) - Exercício 01 -------------- \\

/*
1. Calcular a soma de todos os dígitos de um número inteiro positivo.
*/

const prompt = require("prompt-sync")(); // permite o prompt

var numero = prompt("Digite um número: ");
var lista = [];
var total;

for (let i of numero) {
  lista.push(parseInt(i));
}
console.log(lista);
const total = lista.reduce((total, currentElement) => total + currentElement)

// mesma coisa que...
total = lista.reduce(function (total, currentElement) {
//  console.log(total + " " + currentElement);
  return total + currentElement;
});

console.log(total);

// ou...

// contador = 0;
// for (let i of numero) {
//   contador = contador + parseInt(i);
// }
// console.log(contador);
