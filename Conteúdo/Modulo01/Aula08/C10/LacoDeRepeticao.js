/* ------------ Estruturas de repetição - (Aula 08) - Laço em JavaScript ------------  


Laços de Repetição: 

1) Laço for tradicional:

    1° argumento: Defino o valor inicial
    2° argumento: Condição de parada de for 
    3° argumento: incrementando (aumentando) o valor de i

 i+=2 -> i + 2
 i-=5 -> i - 5 

    for(let 1° argumento; 2° argumento; 3° argumento){
        
       código a ser executado
    }

    • A expressão inicial é inicializada e, caso possível, é
      executada. Normalmente essa expressão inicializa um ou
      mais contadores, mas a sintaxe permite expressões de
      qualquer grau de complexidade, podendo conter também
      declaração de variáveis.

    • A expressão condição é avaliada. Caso o resultado da
      condição seja verdadeiro, o laço é executado. Se o valor da
      condição for falso, então o laço terminará. Se a expressão
      condição for emitida, a condição se assume verdadeira.

    • A instrução é executada.

    • A atualização da expressão incremento, se houver, executa e
      retorna o controle para o passo 2.



==========================================================================

2) For in:

    • A declaração FOR IN executa iterações a partir de uma variável
    específica, percorrendo todas as propriedades de um objeto.

    • Para cada propriedade distinta, o JavaScript executará uma iteração.

    for (variavel in objeto) {
    Declarações
    }

    • A declaração FOR IN irá retornar o nome pré-definido da propriedade
      ao invés do seu index numérico. Assim é melhor usar o tradicional for
      com index numérico quando interagir com arrays, pois o FOR IN
      interage com as propriedades definidas pelo programador ao invés
      dos elementos do array.

==========================================================================

3) For of 

    • O loop FOR OF percorre objetos iterativos (incluindo
      strings e arrays), chamando uma função personalizad
      a com instruções a serem executadas para o valor
      de cada objeto distinto. O FOR OF interage com o
      VALOR das propriedades.

      for (<variavel> of <iteravel>){
      declaração
      }

==========================================================================

4) indexOf()

    • O método indexOf() retorna o primeiro índice em que o elemento pode 
    ser encontrado no array, retorna –1 caso o mesmo não esteja presente.
    
    array.indexOf(elementoDePesquisa, [pontoInicial = 0]

    • Para localizar valores em um array
    var array = [2, 5, 9];
    array.indexOf(2); //0
    array.indexOf(7); //-1
    array.indexOf(9, 2); //2
    array.indexOf(2, -1); //-1
    array.indexOf(2, -3); //0

==========================================================================

5) forEach

    • O método forEach() executa uma dada função em cada elemento de
     um array.

    array.forEach(callback (currentValue [, index [, array]]) [, thisArg]);

    • Callback: função para executar em cada elemento, recebendo tês
    argumentos.

    1. CurrentValue: o valor atual do elemento sendo processado no array.

    2. Index Opicional: o índice do elemento atual sendo processado no
    array.
    
    3. Array Opicional: o array que forEach() está sendo aplicado.

    • ThisArg Opicional: o valor a ser usado como this quando executar
    callback.

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