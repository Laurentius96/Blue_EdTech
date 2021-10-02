// ------------------------------------------------------------- Dice Game -------------------------------------------------------- \\

/* Olá, tudo bem? 
    
    O código a seguir foi criado com o intuito para atender o desafio da Blue EdTech.

    Desafio:
    Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.

    O programa tem que:

    1) Perguntar quantas rodadas você quer fazer; (X)
    2) Perguntar quantos jogadores vão jogar; (X)
    3) Criar um objeto pra cada jogador com nome e número tirado; (x)
    4) Guarda todos os objetos em uma lista; (x)
    5) Ordenar esses objetos, sabendo que o vencedor tirou o maior número
    no dado; ()
    6) Mostrar no final qual jogador ganhou mais rodadas e foi o grande
    campeão. (X)

 */

// -------------------------------------------------------------- Código ----------------------------------------------------------- \\

const prompt = require("prompt-sync")(); // permite usar o prompt.

// // Declaração de váriáveis:
var num_rodadas; // -------------------------------------------------------> variável que irá receber a quantidade de rodadas...
var num_us; // ------------------------------------------------------------> variável que irá receber a quantidade de usuários...
var jogada; // ------------------------------------------------------------> Variável que irá receber as jogas dos dados lançados pelo usuário...
var lista_jogadores = []; // ----------------------------------------------> Lista que irá receber os jogadores e seus resultados no lançamento dos dados, será usada para ver o  ganhador...
var lista_ordenada; //-----------------------------------------------------> Variável destinada para receber a lista de rodadas ordenada...

// // 1) Perguntar quantas rodadas você quer fazer:

console.log("|============= Dice Game ============|");
console.log("|    Quantas rodadas iremos jogar?   |");
num_rodadas = +prompt("                  "); // ---------------------------> Escolha do usuáro...
console.log("|====================================|");

// // 2) Perguntar quantos jogadores vão jogar:

console.log("|  Quantos jogadores vão participar? |");
num_us = prompt("                  "); // ---------------------------------> Escolha do usuáro...
console.log("|====================================|");

// // 3) Criar um objeto pra cada jogador e número tirado:

for (let i = 1; i <= num_us; i++) {
  let jogador = {}; // ---------------------------------------------------> Objeto que irá receber os nomes dos usuários e terá posteriormente a lista dos dados lançados...
  let lista_jogada = []; // ----------------------------------------------> Lista que irá receber os resultados dos dados lançados pelo jogador...
  console.log(`|  Qual é o nome do jogador - n°(${i})? |`); // -----------> Perfumaria,aqui mostra o número do jogador que será cadastrado...
  jogador.nome = prompt("                  "); //  -----------------------> Escolha do usuáro...

  for (let r = 1; r <= num_rodadas; r++) {
    jogada = Math.floor(Math.random() * 6 + 1);
    lista_jogada.push(jogada);
  }
  console.log("|====================================|");
  jogador.dados = lista_jogada;
  // //  4) Guarda todos os objetos em uma lista:
  lista_jogadores.push(jogador);
}

// // 5) Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado; (Infelizmente não consegui fazer a função ordenar os valores)

lista_jogadores.sort(function (a, b) {  
  return a.dados - b.dados;
});
lista_jogadores.reverse();
console.log(lista_jogadores);

// // 6) Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão. (Iria funcinar caso a etapa 5) tivesse funcinando)
console.log(`\n O vencedor é ${lista_jogadores[0].nome}`);
