//-------------------------------------- Desafio 01 ------------------------------------------------------------------*/
/* 
 Criar uma LISTA de produtos onde a mesma apresente os seguintes campos:
 descrição, valor e quantidade. Com base nas informações apresentadas o seu
 programa deverá mostar o valor total gasto na compra.

 Exemplo:
 Descrição: Coca Cola - Valor: R$ 9,00 - Quantidade: 10,00
 Toddynho - R$3,50 - Quantidade: 5
 Doritos - R$2,00 - Quantidade 2
 O programa deve retornar: Total: 111,50

 */

const produtos = ["Coca-Cola", "Toddynho", "Doritos"];
let valor = [9, 3.5, 2];
let qtd = [10, 5, 2];
var count = 0;
var total = 0;

while (count < +produtos.length) {
  console.log(
    `Produto: ${produtos[count]} - Valor: ${valor[count]} - Quatd: ${qtd[count]}`
  );
  total += valor[count] * qtd[count];
  count++;
}

console.log(`Total: ${total}`);

const prod = [
  {
    descrição: `Coca-Cola`,
    valor: 9,
    quantidade: 10, // // posição 0
    descrição: `Toddynho`,
    valor: 3.5,
    quantidade: 5, // // posição 1
    descrição: `Doritos`,
    valor: 2,
    quantidade: 2, // // posição 2
  },
];

let totalidade = 0;
let index = 0;

while (index < prod.length) {
  const { valor, quantidade } = prod[index];
  totalidade = totalidade + valor * quantidade;
  index++;
}
console.log(totalidade);
