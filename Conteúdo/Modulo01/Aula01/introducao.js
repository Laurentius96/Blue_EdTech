// ------------------------------- Introdução -----------------------------\\

/* -------------------------------------- variáveis

let -----> declara no escopo de bloco, no escopo de função e poder ser alterada...

var ----->  declara no escopo de global, no escopo de função, e poder ser aterada...

const ----> declare no escopo de função, no escpo de bloco e não pode ser alterada...

*/
// Exemplo:

// let variavel01;
// const variavel02;
// var variavel03;

/*-------------------------------------- tipos de variável

String: quase qualquer valor entre aspas simples ou aspas duplas;
Numérico: decimais;
Booleano: true (verdadeiro) ou false (falso);
Objeto: arraw (listas);

typeof() ----> usada para daber o tipo da varável.

*/
// Exemplo:
console.log("\n");
console.log("Exemplo variável:" + "\n");
var tipo01 = 50;
var tipo02 = 50.555;
var tipo03 = "Olá";
var tipo04 = 50 < 40; // false
var tipo05 = 50 > 40; // true
var tipo06 = ["Lorenzo", " Caio", "Ana"];


console.log(tipo01);
console.log(tipo02);
console.log(tipo03);
console.log(tipo04);
console.log(tipo05[1]); // diferente do python não é possivel usar número snegativos
console.log(tipo06 + "\n");

console.log(typeof tipo01);
console.log(typeof tipo02);
console.log(typeof tipo03);
console.log(typeof tipo04);
console.log(typeof tipo05);
console.log(typeof tipo06 + "\n");

// // -------------------------------------- console.log
// Exemplo:
console.log("----------------------------");
console.log("Exemplo Console.log:" + "\n");
console.log("Olá mundo!");
console.log(`Olá mundo? \n`); // outro uso: com crase

// // -------------------------------------- prompt
// Exemplo:
console.log("----------------------------");
console.log("Exemplo do Prompt:" + "\n");
const prompt = require("prompt-sync")(); // permite usar o prompt
var nome = prompt("Escreva seu nome: "); // recebe informação do usuário...
console.log(`Seu nome é: ${nome} \n`); // ${} usado para chamar a variável dentro das crases.

/* --------------------------------------- concatenar

Uso da função ---> concat()

*/
// Exemplo 01:
console.log("----------------------------");
console.log("Exemplo Concatenação:" + "\n");
var a = "Meu nome é ";
var b = "Tiago!";
var c = a.concat(b);
console.log(c + "\n");

// Exemplo 02:
var d = "Meu nome é ";
var e = "Lorenzo";
var f = d + e;
console.log(f + "\n");

// Exemplo 03:

console.log(`${a}${b} `);
console.log(`${d}${e} \n`);

// Exemplo 04:

var array1 = ["d", "e", "v"];
var object = {a:10};
var array2 = array1.concat(object);
console.log('a:'+array2[3].a);

object.a = 99;
console.log('a:'+array2[3].a);

array2[3].a = 10;
console.log('a:'+object.a);
console.log('a:'+array2[3].a);

/* --------------------------------------- Operações

!= diferente / negação;
= recebe;
== comparação;
=== copmpara e verifica o tipo entre os comparados (str, num);

+ ---> Soma;
- ---> Subtração;
* ---> Multiplicação;
/ ---> Divisão;
% ---> Resto da Divisão.


*/
