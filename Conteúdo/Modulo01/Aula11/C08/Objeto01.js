// ---------------------------------- Objeto -----------------------------\\
/*
 
 Um objeto é uma coleção de dados e/ ou funcionalidade relacionadas 
 (que geralmente consistem em diversas variavéis e funções - que são chamadas
 de propriedades e métodos quando estão dentros de objetos). Vamos trabalhar 
 com um exemplo para entender como eles são.

*/

// // 

/* use Ctrl + K e Q */ 

//----------------------------------------- Objetos Vazios:

let aluno = {}; 
let bicicleta = {}; 

//----------------------------------------- 

// // Exemplo 01:
let pessoa = {
  nome: "Lorenzo Bianchi", // propiedade (nome) do objeto
  idade: 25,
  sexo: "Masculino",
};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.sexo);

//----------------------------------------- Adicionar atributos

/* 
Após o meu objeto ser criado podemos adicionar atributos (propriedades)
nelas - (NomeDoObjeto."atributo")
*/ 
pessoa.escoldade = "Superior Completo";
console.log(pessoa);

//----------------------------------------- Para deletar um atributo
// // (delete."atributo")

delete pessoa.idade;
console.log(pessoa);