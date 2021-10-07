// ---------------------------------- Objeto -----------------------------\\
const prompt = require("prompt-sync")(); // permite usar o prompt

// // -------------------------------------------------------- Relembrando:
let pessoa = {
  nome: "Lorenzo Bianchi", // propiedade (nome) do objeto
  idade: 25,
  sexo: "Masculino",
};
console.log(pessoa); // // Imprime o todo conteúdo do objeto
console.log();
console.log(pessoa.nome); // // Imprime o conteúdo nome
console.log();
console.log(pessoa.idade); // // Imprime o conteúdo idade
console.log();
console.log(pessoa.sexo); // // Imprime o conteúdo sexo
console.log();
console.log("Nome:" + pessoa.nome + "\n" + "idade:" + pessoa.idade);
console.log();

pessoa.bio = function () {
  return `Meu nome é ${this.nome}...`;
};
console.log(pessoa.bio());
console.log();

// // -------------------------------------------------------- Base:

const filme = {
  nome: "E o vento levou",
  duracao: 240,
  ano: 1940,
  diretor: "Victor Fleming",
  atores: ["Vivien Leigh", "Clark Gable"],
};

console.log(filme);

// // -------------------------------------------------------- Object.Key
/*
Object.keys() retorna um array cujo os elementos são strings
correspondentes para a propriedade enumerável encontrada
diretamento sobre o objeto. A ordenação das propriedades é a
mesma que a dada pelo loop sobre as propriedades do objeto
manualmente.
*/

console.log(Object.keys(filme));

// // -------------------------------------------------------- Object.values
/*
Object.values() retorna um array cujos elementos são os valores das
propriedades enumeradas encontradas no objeto. A ordem das
propriedades é a mesma que a dada pelo laço sobre os valores
da propriedade do objeto manualmente.
*/

console.log(Object.values(filme));

// // -------------------------------------------------------- Object.entries
/*
Object.entries() retorna um array cujos elementos são também
arrays correspondentes aos pares de propriedades [key,value] enumeráveis 
encontrados diretamente sobre o objeto. A ordem das propriedades é a 
mesma que seria se fossem iteradas as propriedades do objeto manualmente.
*/

console.log(Object.entries(filme));

// // -------------------------------------------------------- Objetos com for...in
/*
O laço for...in interage sobre propriedades enumeradas de um objeto, 
na ordem original de inserção. O laço pode ser executado para cada propriedade 
distinta do objeto:
*/

for (let item in filme) {
  console.log(item, filme[item]);
}

// // -------------------------------------------------------- Objetos com Object.keys()
/*
O Object.keys() cria uma lista de chaves de um objeto especifico, com
isso podemos utilizar um for normal para varrer essa lista e pegar os
valores do objeto:

rops = properties = propriedades "por boa pratica utilizar pra dizer q estamos percorrendo as propriedades da lista"

const props = Object.keys(filme);
for (let i = 0; i < props.length; i++) {
  console.log(filme[props[i]]);
}
*/

const lista = Object.keys(filme);
for (let i = 0; i < lista.length; i++) {
  console.log(filme[lista[i]]);
}
console.log();

// // -------------------------------------------------------- Itenrando com o for...of
// // similar: for(const filme of filmes)
for (const prop of lista) {
  console.log(filme[prop]);
}
console.log();

// // -------------------------------------------------------- Add itens ao objeto
const catalogo = {};
const fil = [];
const qtd = prompt("Digite quantos filmes você quer cadastrar: ");

for (let u = 0; u < qtd; u++) {
  catalogo.nome = prompt("Digite seu filme:");
  catalogo.duracao = +prompt("Digite a duração:");
  catalogo.ano = +prompt("Digite o ano do filme:");
  catalogo.diretor = prompt("Digite o diretor do filme:");

  fil.push(catalogo);
}

console.log(fil);
