// ---------------------------------- Aula 16 ----------------------------------\\
const prompt = require("prompt-sync")(); // permite usar o prompt

/*
 Classes
 Classe ----> "Fábrica de Ojetos"
 Atributo -->  Características dos meus objetos (celular: marca, peso, cor, tamanho...)
 Método ---->  "Ações" (enviar mensagem, fazer chamada, abrir facebook...)
*/

// // Responsável pela criação dos objetos:
class Filme {
  // // TODA classe TEM um CONSTRUTOR...
  constructor() {
    this.titulo = "";
    this.ano = 0;
    this.genero = "";
    this.diretor = "";
    this.ator = "";
    this.duracao = 0;
  }
  // // Criando o nossos métodos...
  Reproduzir() {
    console.log("Reproduzindo o filme...");
  }
  Pausar() {
    console.log("Pausando || ");
  }
  Avancar() {
    console.log("Avançando >> ");
  }
  Fechar() {
    console.log("Fechando X ");
  }
}

class Dvd extends Filme {
  constructor(titulo, ano, genero, diretor, ator, duracao) {
    super();
  }
}

// // Para inserir um outo cursor na tela pressionar Alt + Shift

let filme = new Filme();
filme.titulo = String(prompt("Nome do filme:"));
filme.ano = parseInt(prompt("Ano do filme:"));
filme.genero = String(prompt("Gênero do filme:"));
filme.diretor = String(prompt("Nome do diretor do filme:"));
filme.ator = String(prompt("Nome do ator principal:"));
filme.duracao = parseInt(prompt("Duração do filme em minutos:"));
console.log();

console.log(filme);

console.log();
let filme2 = new Filme();
filme2.titulo = String(prompt("Nome do filme:"));
filme2.ano = parseInt(prompt("Ano do filme:"));
filme2.genero = String(prompt("Gênero do filme:"));
filme2.diretor = String(prompt("Nome do diretor do filme:"));
filme2.ator = String(prompt("Nome do ator principal:"));
filme2.duracao = parseInt(prompt("Duração do filme em minutos:"));
console.log(filme2);
