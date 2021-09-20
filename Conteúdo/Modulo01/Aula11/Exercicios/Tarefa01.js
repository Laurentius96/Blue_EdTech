// ----------------------------- Tarefa 01 - Objetos ---------------------\\

/*
    Crie catálogo de filmes com 5 filmes, cada filme precisa ser um objeto,
    cada objeto precisa ter os seguintes atributos:

    - Nome
    - Duração
    - Ano
    - Diretor
    - Atores principais(lista)
    - Dados (função anônima que retorna uma string com os dados do filme)

    No final mostra no console os dados de todos os filmes ao mesmo
    tempo.

*/

//---------------------------------- Código ------------------------------\\

const prompt = require("prompt-sync")(); // permite usar o prompt

let catalogo = {
  filme1: {
    nome: "F1",
    duracao: 121,
    ano: 2001,
    diretor: "D1",
    atores: ["Ator1", "Ator11"],
  },
  filme2: {
    nome: "F2",
    duracao: 122,
    ano: 2002,
    diretor: "D2",
    atores: ["Ator2", "Ator22"],
  },
  filme3: {
    nome: "F3",
    duracao: 123,
    ano: 2003,
    diretor: "D3",
    atores: ["Ator3", "Ator33"],
  },
  filme4: {
    nome: "F4",
    duracao: 124,
    ano: 2004,
    diretor: "D4",
    atores: ["Ator4", "Ator44"],
  },
  filme5: {
    nome: "F5",
    duracao: 125,
    ano: 2005,
    diretor: "D5",
    atores: ["Ator5", "Ator55"],
  },
  filme6: {
    nome: "F6",
    duracao: 126,
    ano: 2006,
    diretor: "D6",
    atores: ["Ator6", "Ator66"],
  },
  filme7: {
    nome: "F7",
    duracao: 127,
    ano: 2007,
    diretor: "D7",
    atores: ["Ator7", "Ator77"],
  },
};

catalogo.revelar = function () {
  return console.log(catalogo);
};

console.log(catalogo.revelar());

//-------------------------------------------------- Resolução do Professor:

var filme1 = {
  nome: "F1",
  duracao: 121,
  ano: 2001,
  diretor: "D1",
  atores: ["Ator1", "Ator11"],
  dados: function () {
    return `O Filme ${this.nome} tem a duração de ${this.duracao} teve sua estrei no cinema em ${this.ano}, foi dirigito por ${this.diretor}, os Artistas Principais são ${this.atores}.`;
  },
};

var filme2 = {
  nome: "F2",
  duracao: 122,
  ano: 2002,
  diretor: "D2",
  atores: ["Ator2", "Ator22"],
  dados: function () {
    return `O Filme ${this.nome} tem a duração de ${this.duracao} teve sua estrei no cinema em ${this.ano}, foi dirigito por ${this.diretor}, os Artistas Principais são ${this.atores}.`;
  },
};
var filme3 = {
  nome: "F3",
  duracao: 123,
  ano: 2003,
  diretor: "D3",
  atores: ["Ator3", "Ator33"],
  dados: function () {
    return `O Filme ${this.nome} tem a duração de ${this.duracao} teve sua estrei no cinema em ${this.ano}, foi dirigito por ${this.diretor}, os Artistas Principais são ${this.atores}.`;
  },
};
var filme4 = {
  nome: "F4",
  duracao: 124,
  ano: 2004,
  diretor: "D4",
  atores: ["Ator4", "Ator44"],
  dados: function () {
    return `O Filme ${this.nome} tem a duração de ${this.duracao} teve sua estrei no cinema em ${this.ano}, foi dirigito por ${this.diretor}, os Artistas Principais são ${this.atores}.`;
  },
};
var filme5 = {
  nome: "F5",
  duracao: 125,
  ano: 2005,
  diretor: "D5",
  atores: ["Ator5", "Ator55"],
  dados: function () {
    return `O Filme ${this.nome} tem a duração de ${this.duracao} teve sua estrei no cinema em ${this.ano}, foi dirigito por ${this.diretor}, os Artistas Principais são ${this.atores}.`;
  },
};
var filme6 = {
  nome: "F6",
  duracao: 126,
  ano: 2006,
  diretor: "D6",
  atores: ["Ator6", "Ator66"],
  dados: function () {
    return `O Filme ${this.nome} tem a duração de ${this.duracao} teve sua estrei no cinema em ${this.ano}, foi dirigito por ${this.diretor}, os Artistas Principais são ${this.atores}.`;
  },
};
var filme7 = {
  nome: "F7",
  duracao: 127,
  ano: 2007,
  diretor: "D7",
  atores: ["Ator7", "Ator77"],
  dados: function () {
    return `O Filme ${this.nome} tem a duração de ${this.duracao} teve sua estrei no cinema em ${this.ano}, foi dirigito por ${this.diretor}, os Artistas Principais são ${this.atores}.`;
  },
};

console.log(filme1.dados());
console.log();
console.log(filme2.dados());
console.log();
console.log(filme3.dados());
console.log();
console.log(filme4.dados());
console.log();
console.log(filme5.dados());
console.log();
console.log(filme6.dados());
console.log();
console.log(filme7.dados());
console.log();
