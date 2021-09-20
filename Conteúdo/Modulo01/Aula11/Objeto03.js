// ---------------------------------- Objeto -----------------------------\\
const prompt = require('prompt-sync')(); // permite usar o prompt

let pessoa = {
  nome: "Renato Pordeus Furtado",
  idade: 17,
  sexo: "masculino",
};
pessoa.interesses = ["Dinheiro", "Vestibular", "Cinema", "Programação"];
console.log(pessoa);

// // Vamos criar uma função anônima chamada bio para o nosso objeto.

// // this. --> É usado, pois, nos referimos ao objeto atual, ou seja, o objeto
// // pessoa. Usar o "this dá valor semantico ao código."

pessoa.bio = function () {
  return `Meu nome é ${this.nome}, tenho ${this.idade} anos, sou do sexo ${this.sexo} e 
  meus interesse são: ${this.interesses[0]}, ${this.interesses[1]}, ${this.interesses[2]}, ${this.interesses[3]}`;
};

console.log(pessoa.bio());
