//-------------------- CodeLab (Aula 09) - Exercícios 11 -------------- \\

/* 
11 - Criar uma função para inverter um array.
*/

var lista = [3, 2, 1];
var novaLista = [];
var l;

for (let i = lista.length - 1; i >= 0; i--) {
  novaLista.push(lista[i]);
  console.log(novaLista);
}

console.log(novaLista);
