//-------------------- CodeLab (Aula 04) - Exercício 03 -------------- \\

/*DESAFIO 3
Caixa eletrônico
Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/

console.log("Banco x");

let saque = parseInt(prompt("Digite o valor desejável para saque:"));

if (saque > 10 && saque < 600) {

let cem = parseInt(saque/100);
saque = saque % 100;

let cinquenta = parseInt(saque/50);
saque = saque % 50;

let dez = parseInt(saque/10);
saque = saque % 10;

let cinco = parseInt(saque/5);
saque = saque % 5;

let um = parseInt(saque/1);
saque = saque % 1;

console.log(`Nota(s) R$ 100,00. ${cem} nota(s)`);
console.log(`Nota(s) R$ 50,00. ${cinquenta} nota(s)`);
console.log(`Nota(s) R$ 10,00. ${dez} nota(s)`);
console.log(`Nota(s) R$ 5,00. ${cinco} nota(s)`);
console.log(`Nota(s) R$ 1,00. ${um} nota(s)`);
} else {
  console.log("Saque indisponível! Saque disponivel somente a partir de R$10,00 e até R$600,00")
}