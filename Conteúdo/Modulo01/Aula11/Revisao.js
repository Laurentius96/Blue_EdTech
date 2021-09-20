// *************************** Revisão Gabriel ************************ \\
const prompt = require("prompt-sync")(); // permite usar o prompt
/* ctrl + K e Q */
// // Objetos:

// // --------------------------------------------- Lista Vs Dicionário

let lista = ["Diego", 20, "C8", "Blue"];
let aluno = {
  nome: { primeiro: "Diego", sobrenome: "Villa" },
  nome2: "Diego",
  idade: "25",
  turma: "C8",
  curso: "Blue",
};

console.log(lista[0]);
console.log(aluno.curso); // Exibindo um valor armazenado no objeto
console.log();

// // ---------------------------------------------- Add no Dicinário

aluno.cidade = "Curitiba";
console.log(aluno); // Exibido o objeto inteiro
console.log();

// // ---------------------------------------------- Remover no Dicinário

delete aluno.turma;
console.log(aluno); // Exibindo o objeto inteiro
console.log();

// // ---------------------------------------------- Listas em objetos

aluno.interresses = ["Animes", "Videogames", "Cinema", "Codar"];
console.log(aluno.interresses[2]);
console.log();

// // ---------------------------------------------- Objeto dentro de Objetos

console.log(aluno.nome.primeiro); // Exibindo um valor dentro de outro valor
console.log(aluno.nome.sobrenome); // Exibindo um valor dentro de outro valor
console.log();

// // ---------------------------------------------- Função Anônima:

// // Relembrando o Return
/*
 Revisão return: Quando crio uma função e quero que ela me apresente um resultado no final
 Uso o return. Dessa maneira, após executar todos os comandos, ela me devolve o que foi pedido

*/
function soma() {
  let valor1 = +prompt("Digite um N°:");
  let valor2 = +prompt("Digite um N°:");
  let soma = valor1 + valor2;
  return soma;
}

let v1 = soma(); // Armazenei o valor retornado pela função.
let v2 = soma();
console.log(v1); // Exibi o valor armazenado anteriormente.
console.log(v2);
console.log(); // Nesse caso, não estou armazenando nada, apenas exibindo.

// // Exemplo 01:
aluno.turma = "C8";
aluno.dados = function () {
  return `O aluno ${this.nome2} tem ${this.idade} anos, está matriculado na turma ${this.turma} do ${this.curso}.`;
};

console.log(aluno.dados());
