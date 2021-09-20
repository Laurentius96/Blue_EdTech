//--------------------------------------Exercício While ------------------------------------------------------------------*/
/* Exercicio 01. 
 Criar uma lista com X itens, utilizando while e index retorne 
 a posição e o conteudo da lista.
*/

let lista = ["Ana", "Bruna", "Clara", "Diana"];
var count = 0;
while (count < lista.length) {
  console.log(`Na posição de N°${count} está ${lista[count]}`);
  count++;
}
