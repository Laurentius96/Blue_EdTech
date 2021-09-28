// ---------------------- Listas & Comandos ---------------------- \\
/*

O que é uma LISTA em JavaScript?

    • Uma LISTA é um tipo de dado que nos permite
    ler diversos valores em sequência. Essa é uma
    estrutura muito útil quando estamos lidando com
    diversos dados e não sabemos quantos serão OU
    quando não é prático ter uma variável para cada um
    deles.

    var <nomeDaLista> = [];

    • Exemplo:

    var frutas = ['Maça', 'Banana'];
    console.log(frutas); // ['Maça', 'Banana']



Funções para manipulação de Listas 

    • A lista é uma estrutura mutável, ou seja, ela
    pode ser modificada. Na tabela a seguir
    estão algumas funções utilizadas para
    manipular listas.

> length

    Retorna o tamanho da lista.
  
    • Exemplo:

    var l = [1, 2, 3, 4]
    console.log(l.length); // 4


> push

    Adiciona um elemento no final da lista.

    var pessoas01 = ["Maria"];
    pessoas01.push("João");
    console.log(pessoas01); // ["Maria", "João"]


> pop

    Retorna o remove um elemento do final do array, ou seja, 
    é o inverso do push().

    var pessoas02 = ["Maria", "João"];
    pessoas02.pop();
    console.log(pessoas02); //  ["Maria"]


> unshift

    Adiciona um elemento no início do array.

    var pessoas03 = ["Maria",
    "Joaquim", "Marcos"];
    console.log(pessoas03.unshift("Marcos"));

> splice

    Remove, adiciona ou substitui um ou mais
    elementos em uma determinada posição do
    array.

    • Remove: (posiçãodoelemento,quantoselementosserão_removidos);

    • Exemplo:

    const p01 = ["Maria", "Joaquim","Marcos"];
    console.log(p01.splice(1, 1)); // posição 1, remove 1

    ====================================================================

    • Adiciona: (posiçãodoelemento,0, elemento_1, elemento_2, ..., elemento_n);

    • Exemplo:

    const p02 = ["Maria", "Joaquim","Marcos"];
    p02.splice(0, 0, "Marcia", "Paulo"); // posição 1, remove nenhum, adiciona "Marcia" e "Paulo"
    console.log(p02);

    ====================================================================

    • Substitui: (posiçãodoelemento, quantoselemento
    sserão_substituídos, elementoqueserá_incluso);

    • Exemplo:

    const p03 = ["Maria", "Marcia", "Paulo", "Marcos"];
    console.log(pessoas.splice(1, 2, "Joaquim")); // posição 1, remove 2, adiciona "Joaquim"

    ====================================================================

> sort

    O método sort() ordena os elementos do array de acordo com a função de
    ordenação.
    
    pessoas.sort(function(a, b) {return a.age - b.age; // ordena de forma crescente // para numeros

    ====================================================================

> fill



--------------------------------------------------------------------------*/

var frutas = ["Maça", "Banana"];
console.log(frutas);

// // ---------------------------------------------- length

var l = [1, 2, 3, 4]
console.log(l.length);


// // ---------------------------------------------- push

var pessoas01 = ["Maria"];
pessoas01.push("João");
console.log(pessoas01); // ["Maria", "João"]

// // ---------------------------------------------- pop

var pessoas02 = ["Maria", "João"];
pessoas02.pop();
console.log(pessoas02);

// // ---------------------------------------------- unshift

var pessoas03 = ["Maria","Joaquim", "Marcos"];
pessoas03.unshift("Marcos");
console.log(pessoas03);

// // ---------------------------------------------- splice (Remove)


const p01 = ["Maria", "Joaquim","Marcos"];
console.log(p01.splice(1, 1)); // posição 1, remove 1

// // ---------------------------------------------- splice (Adicinar)

const p02 = ["Maria", "Joaquim","Marcos"];
p02.splice(0, 0, "Marcia", "Paulo"); // posição 1, remove nenhum, adiciona "Marcia" e "Paulo"
console.log(p02);

// // ---------------------------------------------- splice (Substitui)

const p03 = ["Maria", "Marcia", "Paulo", "Marcos"];
p03.splice(1, 2, "Joaquim"); // posição 1, remove 2, adiciona "Joaquim"
console.log(p03);

// // ---------------------------------------------- sort (Substitui)

var exemplo = ["a", "c", "b", "e", "f"];
console.log(exemplo.sort());

// // 