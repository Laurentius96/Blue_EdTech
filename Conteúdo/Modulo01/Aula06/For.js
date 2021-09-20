const prompt = require('prompt-sync')(); // permite usar o prompt

/*--------------------------------- For & For of------------------------

For ---> Cria um loop que consiste em três expressões
         opcionais, dentro de parênteses e
         separadas por ponto e vírgula,
         seguidas por uma declaração ou
         uma sequência de declarações
         executadas em sequência.

For of ---> Percorre objetos iterativos (incluindo
         strings e arrays), chamando uma função personalizad
         a com instruções a serem executadas para o valor
         de cada objeto distinto. O FOR OF interage com o
         VALOR das propriedades.

------------------------------------------------------------------------*/

// 1) For:
// Exemplo 01:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//----------------------------------


// 2) For of:
let lista = ["Artur","Hector","Karen","Karina"]
var count = 0;
// // Quando uso for, ele vai percorrer o objeto definido (no caso, lista) 
//    usando uma variável definida dentro dele (no caso, item).
// // Então, para cada vez que item percorrer o objeto lista, ele vai 
//    assumir o valor de um dos itens da lista passada.
for (let item of lista){
  // // item recebe os valores da lista, um de cada vez
  console.log(`O elemento ${count} é: ${item}`);
  // // A cada vez que meu for se repetir, eu adiciono 1 na var count, 
  //    para aumentar o elemento mostrado.
  count = count + 1;
}
