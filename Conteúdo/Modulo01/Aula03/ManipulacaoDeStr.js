// ------------------------------- Manipulação de Strings -----------------------------\\

/*

Strings:

> Como usar:

    • Aspas simples x aspas duplas

    • Em JavaScript, você pode escolher aspas simples
    ou duplas para envolver suas strings. Ambas
    linhas abaixo funcionará bem:

    Exemplo:

    • var sgl = 'Single quotes.';
    • var dbl = "Double quotes";


    

> Concatenação de Strings:

    Concatenar é uma palavra chique da programação que
    significa "colocar junto". Para colocar strings juntas em
    JavaScript, usamos o operador (+), o mesmo usamos para
    adicionar números, mas neste contexto é algo diferente.
    Vamos tentar este exemplo no console.

    • var one = 'Hello, ';
    • var two = 'how are you?';
    • var joined = one + two;
    • joined;




> Números x Strings:

    • Então o que acontece quando tentamos adicionar (ou
    concatenar) uma string e um número? Vamos tentar isso no
    console:

    Front ' + 242;
    • Você pode esperar um erro disto, mas funciona correto.
    Tentando representar uma string como um número,
    realmente não faz sentido. Mas representando um número
    como string, faz. Então o navegador espertamente converte
    o número em string e concatena as duas.

    • Você pode fazer isto até com dois números — você pode
    forçar um número a ser string colocando ele entre aspas.
    Experimente o seguinte (nós estamos usando o operador
    typeof para checar o que a variável é, se um número ou
    string):




> Fatiamento de Strings:

    • Se você tem uma variável numérica que precisa converter em
    string, mas não mudar completamente, ou uma string e quer
    converter em número, você pode usar a construção seguinte:
    
    • O objeto Number converterá qualquer coisa passada em um
    número, se for possível. Tente o seguinte:
    var myString = '123';
    var myNum = Number(myString);
    typeof myNum;
    
    • Por outro lado, todo número tem um método chamado
    toString() que converterá para a string equivalente. Tente isto:
    var myNum = 123;
    var myString = myNum.toString();
    typeof myString;

    • Estas construções podem ser bem úteis em algumas situações. Por exemplo, se o usuário colocar um número em um campo de texto, isso será uma string. Entretanto, se você quiser adicionar este número a algo, você precisa que seja um número, então você pode passar isto através do Number() para poder manipular.


*/

// // -------------------------------------------- Exemplo da Concatenação
var one = "Hello, ";
var two = "how are you?";
var joined = one + two;
var multiple = one + one + one + one + two;
var response = one + "I am fine — " + two;

console.log(joined);
console.log(multiple);
console.log(response);

// // ---------------------------------------------- Exemplo Números x Strings

var myDate = '19' + '67';

console.log(myDate);
console.log(typeof(myDate));

// // ---------------------------------------------- Exemplo Fatiamento de Strings

var myString = '123';
var myNum = Number(myString);

console.log(myNum);
console.log(typeof(myNum));

var myNum02 = 123;
var myString = myNum.toString();

console.log(myNum02);
console.log(typeof myString);

// // ---------------------------------------------- .toUpperCase()

var nome = "lorenzo";

console.log(nome.toLocaleUpperCase());

var primieraLetra = nome[0];
primieraLetra.toUpperCase();
console.log(primieraLetra.toUpperCase());

var semPrimeraLetra = nome.slice(1)
console.log(semPrimeraLetra);

console.log(primieraLetra.toUpperCase() + semPrimeraLetra );

