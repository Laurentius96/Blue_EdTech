/*

EXERCÍCIO 07

Crie um programa que verifique se uma letra digitada é "F" ou "M". Conforme aletra, exiba:

F – Feminino ou M – Masculino
Caso escreva outra letra:
Sexo Inválido.

*/
const prompt = require("prompt-sync")(); // permite usar o prompt

var escolha;
var contador = 0;
console.log(`\nQual é seu sexo?
Digite: F – Feminino ou M – Masculino
`);

while (contador === 0) {
  escolha = prompt("Digite seu sexo: ").toUpperCase();
  console.log(escolha);
  console.log(typeof(escolha));
  if (escolha != "F" || escolha == "" || escolha == " " || escolha != "M") {
    console.log("Sexo Inválido! Por favor, faça uma escolha válida...");
  } else {
    contador++;
  }
}

if (escolha === "F") {
  console.log(`\nSexo Feminino!!\n`);
} else {
  console.log(`\nSexo Maculino!!\n`);
}
