//------------------------ CodeLab (Aula 12) - Exercícios 01 ------------------ \\

/* 
01 - Crie um programa que leia o preço e a quantidade de um produto a ser
comprado, calculando o total da compra, guarde essas informações em um objeto.
Se o valor todal da compra for maior que R$ 100,00 de o desconto de 10%, se for
entre R$ 400,00 e R$ 500,00, dê 15% de desconto, se for acima de R$ 500,00, dê
20% de desconto. No final mostre ao cliente a quantidade, o preço do produto e o
valor total de sua compra, considerando o desconto dado. Não se esqueça de
alterar o valor total no objeto.

1) Crie um programa que leia o preço e a quantidade de um produto a ser
comprado, 
2) calculando o total da compra, 
3) Guarde essas informações em um objeto.
4) Se o valor todal da compra for maior que R$ 100,00 de o desconto de 10%, se for
entre R$ 400,00 e R$ 500,00, dê 15% de desconto, se for acima de R$ 500,00, dê
20% de desconto.
5) No final mostre ao cliente a quantidade, o preço do produto e o
valor total de sua compra, considerando o desconto dado. Não se esqueça de
alterar o valor total no objeto.


1°) Primeiro o produto vai ser guardado em um objeto (dicionário);
* ) Como vou pegar essa informação e usar para o desconto?

2°) Para os descontos irei usar o If & Else ou uma função;
* ) 

3°) Usar console.log para quantidade o preço do produto e o
valor total de sua compra, considerando o desconto dado

4°) Alerar o valor do objeto (não podemos declarar como const).
* ) Como vou pegar essa informação e usar para o desconto?

*/

// ----------------------------------- Código ---------------------------------- \\
const prompt = require("prompt-sync")(); // permite usar o prompt

let produto = {
  nome: "Cereale",
  preco: 2,
};

// // 1) Crie um programa que leia o preço e a quantidade de um produto a ser comprado,
var preco = +prompt("Quanto voçê quer pagar no produto?: ");
var qtd = +prompt("Quanto voçê quer pagar no produto?: ");

// // 2) Calculando o total da compra
var total = preco * qtd;

// // 3) Guarde essas informações em um objeto.
var objeto = {};
objeto.preco = preco_unico;
objeto.quantidade = qtd;
objeto.valortotal = total;
console.log(objeto);

// ou \\

/*
var objeto = {
    preco: preco_unico,
    quantidade: qtd,
    valortotal: total,
}
console.log(objeto);
*/

// // 4) Se o valor todal da compra for maior que R$ 100,00 de o desconto de 10%, se for
// entre R$ 400,00 e R$ 500,00, dê 15% de desconto, se for acima de R$ 500,00, dê
// 20% de desconto.

if(objeto,valortotal > 100){
    let novovalor = objeto.valortotal * 0.9 // multiplar o valor para dar o desconto
}