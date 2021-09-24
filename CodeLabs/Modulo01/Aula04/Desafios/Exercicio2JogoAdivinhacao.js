//-------------------- CodeLab (Aula 04) - Exercício 02 -------------- \\

/*
  2. Jogo da adivinhação:
  Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.
*/
console.log("Jogo de adivinhação");
let numeros = Math.floor(Math.random(0, 10) * 11);
let resultado = parseInt(prompt("Digite um número"));
console.log(`O computador escolheu ${numeros}`);

if (resultado === numeros) {
  console.log("ganhou");
} else {
  console.log("perdeu");
}
