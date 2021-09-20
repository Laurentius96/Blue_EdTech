// ---------------------------------- Aula 15 -----------------------------\\

/* 
 Criando um animal
*/

/* 
 Herança --> Quando falos de Herança, temos a classe Mãe e as classes 
 Filhas. Ao extender a classe mãe, a classe filha herda (recebe) tudo 
 da mãe.
*/

// // Dica: Como boa prática, as classes iniciam com letra maúscula
class Animal {
  // // Todos os animais terão esses atributos:
  constructor(nome, idade, preco) {
    this.nome = nome; // // Auto referências
    this.idades = idade;  
    this.preco = preco;
  }
  Estoque() {
    return 10;
  }
}
  
// // A palavra reservada EXTENDS indica que a minha classe cachorro está recebendo TUDO (atributos e métodos) da classe Animal
// // O nome da classe Mãe SEMPRE vem após a palavra EXTENDS
class Cachorro extends Animal {
  constructor(nome, idade, preco, raca, peso) {
    super(nome, idade, preco); // // Preciso obrigatoriamente colocar o super para que o meu programa entenda que eu quero reutilizar esses atribulos da classe mãe.
    this.raca = raca;
    this.peso = peso;
  }

  // // Posso criar métodos exclusivos (únicos para a classse filha)
  Latir() {
    console.log("AU,AU,AU!!");
  }
  // // Posso personalizar um método vindo da classe mães
  ChecarEstoque() {
    console.log("Temos 5 chachorros para doação!");
  }
}

// // A partir deste momento o objeto cachorro existe e pode ser manipulado
let dog = new Cachorro("Caramelo", 2, 50, "vira-lata", 3);
console.log(dog);
dog.Latir(); // PQ console.log(dog.Latir())
console.log(dog.Estoque());
dog.ChecarEstoque();
