// ----------------------- Exercício de Fixação Aula 10 ----------------------- //
/*

    1. Construa uma função que, dado uma string,
    retorna o tamanho do seu maior intervalo entre as
    letras. Caso não existam intervalos entre as letras A
    e B, retorne 0. Para realizar este exercício, você vai precisar:

    •Construir uma função chamada lacuna, que
    receberá como parâmetro uma String.
    •Iterar a string;
    •Encontrar o primeiro valor A no binário adicionado;
    •Encontrar a quantidade de B entre A.


    // BAABBBAAAABBBBAAAA

*/

    var lista = "BAABBBAAAABBBBAAAA"
    var max = 0;

    var primeiro = lista.indexOf("A", 0);
    console.log(primeiro);