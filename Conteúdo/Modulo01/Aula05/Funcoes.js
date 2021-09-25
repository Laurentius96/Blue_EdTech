// ------------------------------- Function em JavaScript -----------------------------\\

/*

Function

    • Funções são blocos de construção fundamentais em JavaScript.
    Uma função é um procedimento de JavaScript - um conjunto de
    instruções que executa uma tarefa ou calcula um valor. Para usar
    uma função, você deve defini-la em algum lugar no escopo do qual
    você quiser chamá-la.


> Definindo funções - Function:

    • Declarando uma função
    • A definição da função (também chamada de declaração de função)
    consiste no uso da palavra chave function (en-US), seguida por:

    • Nome da Função.
    • Lista de argumentos para a função, entre parênteses e separados por
    vírgulas.
    • Declarações JavaScript que definem a função, entre chaves { }.
    • Por exemplo, o código a seguir define uma função simples chamada
    square:

    function Teste(numero) {
    return numero * numero;
    }

    • Se você passar um objeto (ou seja, um valor não primitivo (en-US), tal como Array ou um objeto definido por você) como um parâmetro e a função alterar as propriedades do objeto, essa mudança é visível fora da função, conforme mostrado no exemplo a seguir:

    function minhaFuncao(objeto) {
    objeto.make = "Toyota";
    }

    var meucarro = {make: "Honda", model: "Accord", year: 1ĀĀÿ};
    var x, y;

    x = meucarro.make; // x recebe o valor "Honda"

    minhaFuncao(meucarro);
    y = meucarro.make; // y recebe o valor "Toyota"
    // (a propriedade make foi alterada pela função)

> 

*/

// // ------------------------------------------- Declaração de um função

function Teste(numero) {
  return numero * numero;
}

// // ------------------------------------------- Atividade

const prompt = require("prompt-sync")(); // permite usar o prompt

function idadeVer(a, b) {
  let resultado = a - b;
  if (resultado >= 18) {
    return `\nVocê têm ${resultado} anos - Você é maior de idade!\n`;
  } else {
    return `\nVocê têm ${resultado} anos - Você é menor de idade!\n`;
  }
}

console.log();
var anoAtual = prompt("Que anos estamos?: ");
var seuAno = prompt("Qual é o seu ano de nacimento?: ");
console.log(idadeVer(anoAtual, seuAno));

// // ------------------------------------------- Exemplo função dentro de if

let resposta = prompt(
  "Você deseja verificar a idade? (SIM OU NÃO):"
).toUpperCase();

if (resposta === "SIM") {
  function idadeVer(a, b) {
    let resultado = a - b;
    if (resultado >= 18) {
      return `\nVocê têm ${resultado} anos - Você é maior de idade!\n`;
    } else {
      return `\nVocê têm ${resultado} anos - Você é menor de idade!\n`;
    }
  }
  console.log();
  var anoAtual = prompt("Que ano estamos?: ");
  var seuAno = prompt("Qual é o seu ano de nacimento?: ");
  console.log(idadeVer(anoAtual, seuAno));
} else {
  console.log("Ok, até.... ");
}

// // ------------------------------------------- Exemplo de parâmentros

function verificaLogin(a, b) {
  if (a === "bianchi92@hotmail.com" && b === 12345) {
    console.log("Bem-Vindo Lorenzo!");
  } else {
    console.log("e-mail/senha errados!");
  }
}

var email = prompt("Email: ");
var senha = +prompt("Senha: ");
console.log(verificaLogin(email, senha));

// // ------------------------------------------- Exemplo calculadora

function calculadora(operacao, numero1, numero2) {
  if (operacao === "+") {
    console.log(numero1 + numero2);
  } else if (operacao === "*") {
    console.log(numero1 * numero2);
  } else {
    console.log("ERRO ao escolher a operação!");
  }
}

var operacaoDigitado = prompt("Digitação uma operação (+ ou *) ");
var numero1Digitado = +prompt("Numero 1: ");
var numero2Digitado = +prompt("Numero 2: ");
calculadora(operacaoDigitado, numero1Digitado, numero2Digitado);
