/* ------------ Estruturas de repetição - Laço for ------------  


Laços de Repetição: 

> Laço for tradicional:

    1° argumento: Defino o valor inicial
    2° argumento: Condição de parada de for 
    3° argumento: incrementando (aumentando) o valor de i

 i+=2 -> i + 2
 i-=5 -> i - 5 

    for(let 1° argumento; 2° argumento; 3° argumento){
        
       código a ser executado
    }

  =====================================================================

>


-------------------------------------------------------------------------*/

const prompt = require("prompt-sync")(); // permite usar o prompt

// // ------------------------------------------------------- Laço for ex.01

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// // ------------------------------------------------------- Laço for ex.02

let listaOferta = ["Geladeira", "Fogão", "Iphone"];
let qtdVezes = listaOferta.length; // length mostra o tamanho do array.

for (let i = 0; i < qtdVezes; i++) {
  console.log(`Na posição ${i}, temos o produto: ${listaOferta[i]}`);
}

// // ------------------------------------------------------- Laço for ex.03

var pergunta = prompt("Quer excutar o for? ");

for (let i = 0; pergunta == "sim"; i++) {
  console.log(i);

  pergunta = prompt("Ainda quer excutar o for?: ");
}

// // ------------------------------------------------------- Laço for ex.03

var vezes = +prompt("Quantas vezes você quer executar o código?: ");

for (let i = 0; i <= vezes; i++) {
  console.log(i);
}

// // ------------------------------------------------------- for in ex.01

var lista = [10, 20, 30, 40];

for (let valor in lista) {
  console.log(valor);
  // ele irá mostar os index dos valores de um array
}

// // ------------------------------------------------------- for in ex.02

var lista = "Lista de desejos!";

for (let valor in lista) {
  console.log(valor);
  // ele irá mostar os index dos valores de um
}

// // ------------------------------------------------------- for in ex.03

var formulario = ["Alexandre", 22];

for (let indice in formulario) {
  if (indice == 0) {
    formulario.splice(indice, 1, "Ramon");
  }

  if (indice == 1) {
    formulario.splice(indice, 1, 18);
  }
}

console.log(indice);

// // ------------------------------------------------------- forEach ex.01

// for each = para cada...
function mostrarConteudo(valor, indice, lista) {
  console.log(`O valor é: ${valor}`);
  console.log(`O indece é: ${indice}`);
  console.log(`Lista completa é: ${lista}`);
  console.log();
  console.log();
}

var listaNomes = ["Ramon", "Lorenzo", "Luiz", "Bruno"];
listaNomes.forEach(mostrarConteudo);