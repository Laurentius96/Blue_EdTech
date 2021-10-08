import GetRandomIntInclusive from "GetRandomIntInclusive";
// ---------------------------------- Aula 15 -----------------------------\\

/* 
 Simulador de dados de um Cassino:

 Simular o funcionamento de dados de um Cassino, criando deferentes tipos
 dados e de forma aleatória mostrandoos valores tirados em casa dado.

*/

/*
 Exemplo: Celular
 Classe ----> "Fábrica de Ojetos"
 Atributo -->  Características dos meus objetos (celular: marca, peso, cor, tamanho...)
 Método ---->  "Ações" (enviar mensagem, fazer chamada, abrir facebook...)
*/

// // Dica: Como boa prática, as classes iniciam com letra maúscula

class Dado {
  // // Método: Dentro do método construtor, eu coloco os atributos do meu objeto.

  // // Método construtor = "Molde" / Forma.
  constructor(faces) {
    // // Faces = n° de lados de cada dado.
    this.faces = faces; // Isse é um auto referência.
  }
  // //  Função em JS para gerar um número aleatório
  GetRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // // Criando o método Rolar() para gerar um número aleatório entre 1 e o número de faces que meu dado tiver

  Rolar() {
    console.log(
      "Resultado do dado" + this.GetRandomIntInclusive(1, this.faces)
    );
  }
}

// // Instanciando (criando) os nossos dados

// // A partit deste momento o meu dado existe e pode ser manipulado.
let d6 = new Date(6); // // Criando um dado de 6 fases;
let d12 = new Date(12); // // Criando um dado de 12 fases;
let d100 = new Date(100); // Criando um dado de 100 fases;

d6.Rolar(); // Rolar é o método do objeto dados.
d12.Rolar();
d100.Rolar();
