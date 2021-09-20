// ---------------------------------- Aula 16 -----------------------------\\
const prompt = require('prompt-sync')(); // permite usar o prompt

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
    this.atores = [];
    this.duração = 0;
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

// // Instanciado (Criando) o nosso objeto
// // Esse modo de fazer, é ,ais prático quando utilizamos o prompt para que o usuário preeencha os campos
let click = new Filme();
click.titulo = "Click";
click.ano = 2006;
click.genero = "Drama";
click.diretor = "Frank Coraci";
click.atores = ["Adam Sandler", "Kate Beckinsale", "Chistopher Walken"];
click.duração = 107;

console.log();
console.log(click); // // Para visualizar todo o conteúdo
click.Reproduzir();
click.Pausar();
click.Avancar();
click.Fechar();
