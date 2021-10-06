// ------------------------------------------------------------- Dice Game -------------------------------------------------------- \\

/* Olá, tudo bem? 
    
    O código a seguir foi criado com o intuito para atender o desafio da Blue EdTech.

    Desafio:
    Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.

    O programa tem que:

    1) Perguntar quantas rodadas você quer fazer; (X)
    2) Perguntar quantos jogadores vão jogar; (X)
    3) Criar um objeto pra cada jogador com nome e número tirado; ()
    4) Guarda todos os objetos em uma lista; ()
    5) Ordenar esses objetos, sabendo que o vencedor tirou o maior número
    no dado; ()
    6) Mostrar no final qual jogador ganhou mais rodadas e foi o grande
    campeão. ()

 */

// -------------------------------------------------------------- Código ----------------------------------------------------------- \\

const prompt = require("prompt-sync")(); // permite usar o prompt.

// // Declaração da função:

function rolarDados() {
  let dado = Math.floor(Math.random() * 6) + 1;
  return dado;
}

// // Declaração de váriáveis:
var numRodadas; // -------------------------------------------------------> variável que irá receber a quantidade de rodadas...
var numUsuarios; // ------------------------------------------------------> variável que irá receber a quantidade de usuários...
var lista = []; // -------------------------------------------------------> Variável que irá receber as jogas dos dados lançados pelo usuário...
var listaRodadas = []; // ------------------------------------------------> Variável destinada para receber as vitórias por rodada...
var listaVencedor = []; // -----------------------------------------------> Variável destinada para receber as vitórias totais...
var jogador = []; //  ----------------------------------------------------> Variável destinada para receber o nome do jogador...

// // 1) Perguntar quantas rodadas você quer fazer:

console.log("|============= Dice Game ============|");
console.log("|    Quantas rodadas iremos jogar?   |");
numRodadas = +prompt("                  "); // ---------------------------> Escolha do usuáro...
console.log("|====================================|");

// // 2) Perguntar quantos jogadores vão jogar:

console.log("|  Quantos jogadores vão participar? |");
numUsuarios = +prompt("                  "); // ---------------------------> Escolha do usuáro...
console.log("|====================================|");

// // 3) Criar um objeto pra cada jogador e número tirado:

// Loop para criar o nome dos jogadores...
for (let i = 0; i < numUsuarios; i++) {
  console.log(`|  Qual é o nome do jogador - n°(${i + 1})? |`); // -----------> Perfumaria, aqui mostra o número do jogador que será cadastrado...
  let player = prompt("                  ");
  jogador.push(player);
}
// Loop de rodadas...
for (let i = 0; i < numRodadas; i++) {
  console.log(`| ============ Rodada ${i + 1} ============ |`);
  lista.push([]);

  //Loop de jogadores e seus lançamentos...
  for (let j = 0; j < numUsuarios; j++) {
    lista[i].push({
      rodada: i + 1,
      nome: jogador[j],
      dado: rolarDados(),
    });
  }
  lista[i] = lista[i].sort(function (a, b) {
    return +(b.dado - a.dado);
  });

  console.log(lista[i]);
  console.log(`|   O vencedor da rodada ${i + 1} foi: ` + lista[i][0].nome + "    |");
  console.log();
  listaRodadas.push(lista[i][0].nome);
}
console.log(listaRodadas);

const count = {}; //conta a quantidade de vitorias de cada jogador
for (const num of vencedorrodada) {
  count[num] = count[num] ? count[num] + 1 : 1;
}


// let arrVencedores = Object.entries(count(vencedores));
// /* Conta quantos valores repetidos existem em um array e devolve um objeto com a chave sendo o nome do valor repetido e o valor a quantidade de vezes que se repetiu */
// function count(arr) {
//     return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
// }

