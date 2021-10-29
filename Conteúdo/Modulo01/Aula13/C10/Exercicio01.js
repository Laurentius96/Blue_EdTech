/*

Utilizando a tarefa da aula 11, mostre na tela:

Utilizando Object:
• Apenas os valores do objeto;
• Apenas as chaves do objeto;
• As chaves e os valores do objeto;

Agora faça o mesmo utilizando o for.

*/
// ------------------------------------------------------------------ \\
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

var catalogo = [filme1, filme2, filme3, filme4, filme5, filme6, filme7];

// // Apenas as chaves do objeto
for (let i of catalogo) {
  console.log(Object.keys(i));
}

// // Apenas os valores do objeto;
for (let i of catalogo) {
  console.log(Object.values(i));
}

// // As chaves e os valores do objeto;
for (let i of catalogo) {
  console.log(Object.entries(i));
}

//  // 

