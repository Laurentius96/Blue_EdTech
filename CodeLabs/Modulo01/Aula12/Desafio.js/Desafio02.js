//-------------------- CodeLab (Aula 12) - Desafio 02 -------------- \\

/* 
Faça um programa que leia nome e média de um aluno, guardando também a situação em um objeto. No final, mostre o conteúdo da estrutura na tela. A média para aprovação é 7. Se o aluno tirar entre 5 e 6.9 está de recuperação, caso contrário é reprovado.
*/

//---------------------------------- Código ------------------------------\\

const prompt = require("prompt-sync")(); // permite usar o prompt.

var count = 0;
var aluno = {
  nome: "",
  nota: [],
  situação: "",
};

aluno.nome = prompt("Por favor, adicionar o nome do aluno: ");

while (true) {
  let addNota = prompt("Por favor, adicionar a nota: ");

  if (addNota == " " || addNota == "") {
    console.log("Valor invalido...");
    console.log(addNota);
  } else {
    console.log("Tudo OK...");
    break;
  }
}
