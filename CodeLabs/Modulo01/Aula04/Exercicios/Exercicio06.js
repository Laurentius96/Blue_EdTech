/*

EXERCÍCIO 06
Faça um programa que peça dois números, imprima o maior deles ou imprima
"Números iguais" se os números forem iguais.

*/

const prompt = require("prompt-sync")(); // permite usar o prompt

var num1;
var num2;
var contador = 0;

while (contador === 0) {
  num1 = prompt("Por favor, digite um número (N°1): ");
  num2 = prompt("Por favor, digite um número (N°2): ");

  if (
    num1 == 0 ||
    num1 == "" ||
    num1 == " " ||
    num2 == 0 ||
    num2 == "" ||
    num2 == " "
  ) {
    console.log(`\nPor favor digite números válidos...`);
  } else {
    contador++;
  }
}

if (num1 === num2) {
  console.log(`\nNúmeros iguais`);
} else if (num1 > num2) {
  console.log(`\n${num1} é o número maior`);
}else{
    console.log(`\n${num2} é o número maior`);
}
