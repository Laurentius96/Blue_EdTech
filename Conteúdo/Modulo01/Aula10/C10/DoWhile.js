/* ------------ Estruturas de repetição (Aula 10) - While ------------  


1)Do While

    • A declaração DO WHILE cria um laço que executa uma
    declaração até que o teste da condição seja falso. A condição é
    avaliada DEPOIS da execução da rotina, obrigando que a rotina
    seja executada por, pelo menos, uma vez.

    • Exemplo:

    do{
    statement
    }
    while (condição);

    • Declarações: a declaração é executada pelo
    menos uma vez e re-executada toda vez que a
    condição for avaliada como verdadeira.

    • Condição: uma expressão é validada depois de cada passagem pelo laço.
    Se a condição é avaliada como verdadeira, o bloco de código é executado
    novamente. Quando a condição é avaliada como falsa, o controle passa
    para a instrução seguinte do laço.

    • Exemplos: o seguinte laço DO WHILE soma pelo menos uma
    vez e executa novamente até i não ser menor que 5.

        Resultado = ' ';
        var i = 0;
        do {
        i += 1;
        resultado += i + ' ';
        }while (i < 5);


-------------------------------------------------------------------------*/

// // --------------------------- Do While - Exemplo 01

let resultado2 = "";
let i = 0;

// Ações do meu programa...
do {
  i = i + 1; // i ++
  resultado2 = resultado2 + i;
} while (i < 5);
console.log("Resultado do Do While:" + resultado2);

// // --------------------------- Do While - Exemplo 01

