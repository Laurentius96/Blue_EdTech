/* ---------------------- Objetos em JavaScript ----------------------  

1) Objetos

    Um objeto é uma coleção de dados e/ou funcionalidades
    relacionadas (que geralmente consistem em diversas
    variáveis e funções — que são chamadas de propriedades e
    métodos quando estão dentro de objetos). Vamos trabalhar
    com um exemplo para entender como eles são.

    Definição de um objeto:

        let pessoa = {}

        let pessoa = {
            nome: "Lorenzo",
            idade: 27,
            genero: "Masculino",
        }

    Você pode inserir qualquer tipo de dado, um texto, um número, um
    boolean, uma lista(array), uma função, outros objetos, pois são todos
    tipos de variáveis.


-------------------------------------------------------------------------*/

const prompt = require("prompt-sync")(); // permite usar o prompt

// // --------------------------- Objeto - Exemplo 01

let pessoa = {
  nome: "Lorenzo",
  idade: 25,
  genero: "Masculino",
};

console.log(pessoa);

// // --------------------------- Objeto - RESGATANDO um propriedades do objeto criado

console.log(pessoa.idade);

// // --------------------------- Objeto - ADD propriedades ao objeto criado

pessoa.escolaridade = "Pós-gradudo";
console.log(pessoa);

// // --------------------------- Objeto - DELETANDO propriedades do objeto criado

delete pessoa.escolaridade;
console.log(pessoa);

// //  --------------------------- Objeto - ADD ARRAY no objeto criado

pessoa.interesses = ["Tiro com Arco ", "Cinema ", "Passar tempo com os amigos"];
console.log(pessoa);

// //  --------------------------- Objeto - Mostrar o ARRAY específico no objeto criado

console.log(pessoa.interesses[2]);

// //  --------------------------- Objeto - Funções em objetos (função anônima)

pessoa.bio = function () {
  return `Meu nome é ${this.nome}, tenho ${this.idade} anos sou do gênero ${this.genero} e meus interesses são: ${this.interesses}`;
};

console.log(pessoa.bio());

// //  --------------------------- Objeto - ADD boleano

pessoa.blumer = true;
console.log(pessoa);

