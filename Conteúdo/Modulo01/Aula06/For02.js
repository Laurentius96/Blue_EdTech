// --------------------------- For --------------------------- \\
/*

    • A instrução FOR cria um loop que consiste em três expressões
    opcionais, dentro de parênteses e separadas por ponto e vírgula,
    seguidas por uma declaração ou uma sequência de declarações
    executadas em sequência.

> for of

    • O loop FOR OF percorre objetos iterativos (incluindo strings e arrays), 
    chamando uma função personalizada com instruções a serem executadas para o valor
    de cada objeto distinto. O FOR OF interage com o VALOR das propriedades.

    for (<variavel> of <iteravel>){
    declaração
    }

--------------------------------------------------------------------------*/

// // ----------------------------------------- Exemplo 01
   
    let lista = [3, 5, 7];

    for (let i of lista){
    console.log(i);
    }

// // ----------------------------------------- Exemplo 02

    let texto = "Lorenzo é o cara!";

    for (let i of texto){
    console.log(i);
    }