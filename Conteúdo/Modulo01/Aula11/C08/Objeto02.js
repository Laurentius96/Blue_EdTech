// ---------------------------------- Objeto -----------------------------\\
/*
    Quando trabalhamos com objetos, podemos inserir qualquer tipo de dado:
    texto, um número, um booleano, uma lista(array)
*/
const prompt = require('prompt-sync')(); // permite usar o prompt

// // Exemplo 02:

let pessoa = {
  nome: "Chevron da Silva",
  idade: 24,
  genero: "Marculino",
  escolar: "Graduado em Eng. Mecânica",
};
console.log(pessoa.nome.length);

// // Adicionando uma lista , (array) o nosso objeto
pessoa.interesses = ["Carros", "Astrologia", "Footbool", "Java"];

/*
 pessoa.interesses =  "Carros", "Astrologia", "Footbool", "Java" ;
 = pessoa.interesses =  "Carros" 
*/

console.log(pessoa);
console.log(pessoa.interesses.length); // 4