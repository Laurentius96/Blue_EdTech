// ------------------------ Ex. Objeto e como chamar sua totalidade ou um conteúdo
let pessoa = {
  nome: "Lorenzo",
  idade: 25,
};
console.log(pessoa);
console.log(pessoa.nome);

// // ------------------------ Ex. Chamdo os itens de um Array
let listaNome = ["Alex", "Gabriel", "Bruno"];
console.log(listaNome[0]);

// // ------------------------ Ex.: Chamando um item de uma lista de objetos

let listaPessoa = [{ nome: "Lorenzo" }, { nome: "Gabriel" }, { nome: "Bruno" }];
console.log(listaPessoa[0].nome);

// // ------------------------ Ex.: Object.keys(...)
/*
Object.keys() retorna um array cujo os elementos são strings
correspondentes para a propriedade enumerável encontrada
diretamento sobre o objeto. A ordenação das propriedades é a
mesma que a dada pelo loop sobre as propriedades do objeto
manualmente.
*/

let filme = {
  nome: "Vingadores",
  anoLancamento: 2019,
};

console.log(Object.keys(filme));

let listaChaves = Object.keys(filme);
console.log(listaChaves);
// listaChaves[0] = nome;
// listaChaves[1] = anoLancamento;

// // ------------------------ Ex.: Object.values(...)
/*
Object.values() retorna um array cujos elementos são os valores das
propriedades enumeradas encontradas no objeto. A ordem das
propriedades é a mesma que a dada pelo laço sobre os valores
da propriedade do objeto manualmente.
*/

let valoresFilmes = Object.values(filme);
console.log(valoresFilmes);
// valoresFilmes[0] = Vingadores;
// valoresFilmes[1] = 2019;

// // ------------------------ Ex.: Object.entries(...)
/*
Object.entries() retorna um array cujos elementos são também
arrays correspondentes aos pares de propriedades [key,value] enumeráveis 
encontrados diretamente sobre o objeto. A ordem das propriedades é a 
mesma que seria se fossem iteradas as propriedades do objeto manualmente.
*/

let entreiesFilme = Object.entries(filme);
console.log(entreiesFilme);
console.log(entreiesFilme[0]);
console.log(entreiesFilme[0][0]);
console.log(entreiesFilme[0][1]);
console.log(entreiesFilme[1]);
console.log(entreiesFilme[1][0]);
console.log(entreiesFilme[1][1]);

// // ------------------------ Ex. For in em objetos:
/*
O laço for...in interage sobre propriedades enumeradas de um
objeto, na ordem original de inserção. O laço pode ser executado para
cada propriedade distinta do objeto:
*/

// relembrando...
let lista = ["Bruno", "Bruna"];

for (let indice in lista) {
  console.log(indice);
}

for (let x in filme) {
  console.log(x);
}

for (let chave in filme) {
  console.log(filme[chave]);
}

// // ------------------------ Ex. Criando objetos com For:
// const prompt = require("prompt-sync")(); // permite usar o prompt

// /*
// let listaFilmes = [{
//   nome: "Harry Potter",
//   anoLancamento: 2001,
// }];
// */
// let listaFilmes = [];
// for (let i = 0; i < 2; i++) {
//   let filme = {};
//   filme.nome = prompt("Nome do filme: ");
//   filme.ano = prompt("Ano do filme: ");
//   listaFilmes.push(filme);
// }

// console.log(listaFilmes);

// // ------------------------  Ex.02: Chamando um item de uma lista de objetos

var jogador = {
  nome: "José",
  numero: 5,
  patrocinio: ["Nike", "Skol"],
};

jogador.time = "Bragantino";

console.log(jogador);

console.log(jogador.nome); // ou
console.log(jogador["nome"]);
console.log();

for (let chave in jogador) {
  console.log(chave);
  console.log(jogador[chave]);
  console.log();
}

console.log(jogador.patrocinio[1]);

// // ------------------------  Ex.03: Chamando um item de uma lista de objetos

var listaPessoas = [
  {
    nome: "Alex",
    hobbies: ["Estudar", "Ler"],
  },
  {
    nome: "Rafa",
    hobbies: ["Cantar", "Nadar"],
  },
];
console.log();
console.log(listaPessoas[0]);
console.log(listaPessoas[0].nome);
console.log(listaPessoas[0].hobbies);
console.log(listaPessoas[0].hobbies[0]);
console.log();
console.log(listaPessoas[1]);
console.log(listaPessoas[1].nome);
console.log(listaPessoas[1].hobbies);
console.log(listaPessoas[1].hobbies[1]);
