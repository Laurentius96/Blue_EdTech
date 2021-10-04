/* ------------ Estruturas de repetição (Aula 10) - Break ------------  


1) 

    • A palavra chave CONTINUE termina a atual iteração do laço em
    que ele se encontra ou de um laço rotulado, e continua a
    execução deste laço com a próxima iteração.
    • Diferentemente do BREAK, o CONTINUE não termina a
    execução do laço completamente, em vez disso ele:
    1. volta à condição, em um laço tipo while.
    2. volta à expressão, atualizando-a em um laço do tipo for.

    • O CONTINUE pode incluir, opcionalmente, um rótulo que
    permite ao programa pular para a próxima iteração de um laço
    rotulado em vez de pular o loop em que ele se encontra. Neste
    caso, o continue necessita estar dentro de um laço rotulado.
    continue[rotulo];

    • O exemplo abaixo mostra um laço WHILE que tem um
    CONTINUE que será executado quando o valor de i for 3. Assim,
    n terá os valores 1, 3, 7 e 12.

        var i = 0;
        var n = 0;

        While (i < 5){
        i++;
        If (i === 3){
        Continue
        }
        N += i;
        }

-------------------------------------------------------------------------*/

for (let i = 1; i < 10; i++) {
    if (i === 3) {
      continue;
    }
    console.log("O número atual é: " + i);
  }