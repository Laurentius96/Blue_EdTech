//-------------------- CodeLab (Aula 09) - Exercícios 04 -------------- \\

/* 
04-Calcular a soma dos números de um array.
*/
const prompt = require("prompt-sync")(); // permite usar o prompt.
var cont = 0;
var lista = [];

while (cont == 0) {
  console.log();
  let numero = +prompt("Adicione um numero a lista: ");
  console.log(numero);
  lista.push(numero);
  console.log();

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
var soma = 0;
for(let valores of lista){
    soma = soma + valores;
}

console.log(`
A soma da lista (${lista}) é: ${soma}
`);