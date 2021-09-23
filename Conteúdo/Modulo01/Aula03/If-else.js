// ------------------------------- If & Else -----------------------------\\

/*

If-Else;

    • A condicional if é uma estrutura condicional que executa a
    afirmação, dentro do bloco, se determinada condição for
    verdadeira. Se for falsa, executa as afirmações dentro de else.:

    if (condicao):
        afirmacao 1
    else
        afirmacao 2


> Estrutura de controle:


    • No exemplo a seguir demonstramos como programar uma
    estrutura condicional que avalia uma condição e também indica o
    que deve ser feito caso essa condição seja falsa:

    var mediaFinal = "vermelha";

    if (mediaFinal == "verde") {
        console.log(“Aprovado");
    } else {
        console.log(“Em recuperação");
    }

> Else if
    • Múltiplas condicionais if ... Else, podem ser aninhados quando necessário.


    • Observe que não existe elseif (em uma palavra). O correto é a
    instrução com espaços (else if), conforme abaixo:

    if (condição1)
    instrução1
    else if (condição2)
    instrução2
    else if (condição3)
    instrução3

    ...
    else
    instruçãoN


    • No exemplo a seguir demonstramos como programar uma
    estrutura condicional que avalia duas condições:

    var mediaFinal = "vermelha";

    if (mediaFinal == "verde") {
        console.log(“Aprovado");
    } else {
        console.log(“Em recuperação");
    }
    } else {
        console.log(“Reprovado");
    }
    

> Operadores Lógicos "E" (&&) e "OU" (||) 

    • No exemplo a seguir demonstramos como verificar as
    informações de username e password do usuário em uma
    estrutura condicional.

    var username = "usuario123";
    var password = "123456";

    if (username == "usuario123" && password == "123456") {
        console.log("Usuário autenticado");
    } else {
        console.log("Login e/ou senha incorrretos");
    }

*/

// // ------------------------------ Validação para Maiúsculo e Minusculo
let escola = prompt("Digite a sua escola: ").toLocaleLowerCase;

if (escola === "blue") {
  console.log("Você é um Blumer!");
} else if (escola === "udemy") {
  console.log("Termine seu curso...");
} else if (escola === "alura") {
  console.log("É muita propaganda...");
} else {
  console.log("Você é feliz!");
}

// // -------------------------------"E" e "OU"

var username = "usuario123";
var password = "123456";

if (username == "usuario123" && password == "123456") {
console.log("Usuário autenticado");
} else {
console.log("Login e/ou senha incorrretos");
}