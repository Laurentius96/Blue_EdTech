//-------------------- CodeLab (Aula 12) - Desafio 03 -------------- \\

/* 
Crie um programa que leia o preço e a quantidade de um produto a ser comprado, calculando o total da compra, guarde essas informações em um objeto. Se o valor todal da compra for maior que R$ 100,00 de o desconto de 10%, se for entre R$ 400,00 e R$ 500,00, dê 15% de desconto, se for acima de R$ 500,00, dê 20% de desconto. No final mostre ao cliente a quantidade, o preço do produto e o valor total de sua compra, considerando o desconto dado. Não se esqueça de alterar o valor total no objeto. 
*/

//---------------------------------- Código ------------------------------\\

const prompt = require("prompt-sync")(); // permite usar o prompt.

let produto = {};

produto.preco = +prompt("Preço R$: ");
produto.quantidade = +prompt("Quantidade: ");

produto.totalCompra = produto.preco * produto.quantidade;

let desconto = 0;

if (produto.totalCompra >= 100 && produto.totalCompra < 400) {
  desconto = produto.totalCompra * 0.1;
  console.log("Antes do desconto: " + produto.totalCompras);
  // produto.totalCompra = produto.totalCompra - desconto;
  produto.totalCompra -= desconto;
}else if (produto.totalCompras >= 400 &&  produto.totalCompra <= 500) {

    desconto = produto.totalCompras * 0.15;
    console.log("Valor do desconto:")
}
