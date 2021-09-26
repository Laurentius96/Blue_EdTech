// --------------------------------------------------- Jogo do Detetive ----------------------------------------------- \\

/* Olá, tudo bem? 
    
    O código a seguir foi criado com o intuito para atender o desafio da Blue EdTech.
    Desafio:
    Fazer um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    
    1) Telefonou para a vítima?
    2) Esteve no local do crime?
    3) Mora perto da vítima?
    4) Devia para a vítima?
    5) Já trabalhou com a vítima?
    
    O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
    Se a pessoa responder positivamente para:
    > 2 questões classifique como: ------------> Suspeito; 
    > Entre 3 e 4 questões classifique como: --> Cúmplice; 
    > Às 5 questões classifique como: ---------> Assassino;
    > Nenhuma questão classifique como:--------> Inocente;
    
 */

// --------------------------------------------------------- Código ---------------------------------------------------- \\
const prompt = require("prompt-sync")(); // permite usar o prompt.

// //  Declaração de variáveis:

var nome;
var pergunta_1;
var pergunta_2;
var pergunta_3;
var pergunta_4;
var pergunta_5;
var erro = 0;
var contador = 0;

// // Declaração da função:

function validacao(pergunta) {
  console.log(typeof(pergunta));
    if (pergunta.includes ("") ==  || pergunta == " " || pergunta != 1 || pergunta != 2) {
    console.log(
      "Atena: Detetive, por favor preencher corretamente a pergunta!"
    );
    erro++;
  } else {
    if (pergunta == 1) {
      console.log("Atena: Ok, anotado...");
      contador++;
    } else {
      console.log("Atena: Curioso...");
    }
  }
}

// // Introdução ao jogo e suas váriáveis:

console.log(`
Atena: Olá detetive, tudo bem?
Atena: Eu sou Atena a I.A. do governo que irá classifcar e julgar o suspeito que você está interrogando...
Atena: Por favor, digite o primeiro nome do(a) interrogado(a):`);
console.log();
nome = prompt("Nome do interrogado: ");
console.log(`
Atena: Sei que você fez 5 perguntas para o interrogado(a).
Atena: Por favor, coloque coloque a baixo suas perguntas e as resposta do(a) ${nome}.\n`);

// // Perguntas e chamando a função perguntas:

console.log(`| Digite: 1 p/ SIM  OU  Digite: 2 p/ NÃO |`);
console.log(`\nDetetive: Você telefonou para a vítima?`); // imprimir texto dentro das "".
pergunta_1 = validacao(+prompt(`Resposta do(a) ${nome}: `));
console.log(`\nDetetive: Você esteve no local do crime?`); // imprimir texto dentro das "".
pergunta_2 = validacao(+prompt(`Resposta do(a) ${nome}: `));
console.log("\nDetetive: Você mora perto da vítima?"); // imprimir texto dentro dos "".
pergunta_3 = validacao(+prompt(`Resposta do(a) ${nome}: `));
console.log("\nDetetive: Você devia para a vítima?"); // imprimir texto dentro dos "".
pergunta_4 = validacao(+prompt(`Resposta do(a) ${nome}: `));
console.log("\nDetetive: Você já trabalhou com a vítima?"); // imprimir texto dentro dos "".
pergunta_5 = validacao(+prompt(`Resposta do(a) ${nome}: `));

// // Lógica da classificação:

if (erro != 0) {
  console.log(`\nAtena: Resultado inconclusivo devido ao erro de preenchimento! Por favor, rodar novamente o programa...\n`);
} else {
  if (contador === 5) {
    console.log(
      `\nAtena: Segundo o algoritmo, ${nome} pode ser classificado(a) como: ASSINO(A).\n`
    );
  } else if (contador === 2) {
    console.log(
      `\nAtena: Segundo o algoritmo, ${nome} pode ser classificado(a) como: SUSPEITO(A).\n`
    );
  } else if (contador === 3 || contador === 4) {
    console.log(
      `\nAtena: Segundo o algoritmo, ${nome} pode ser classificado(a) como: CÚMPLICE do crime.\n`
    );
  } else {
    console.log(
      `\nAtena: Segundo o algoritmo, ${nome} pode ser classificado(a) como: INOCENTE.\n`
    );
  }
}
