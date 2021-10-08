// ------------------------------------------------------------- Dice Game -------------------------------------------------------- \\

/* Olá, tudo bem? 
    
    O código a seguir foi criado com o intuito para atender o desafio da Blue EdTech.

    Desafio:
    Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.

    O programa tem que:

    1) Perguntar quantas rodadas você quer fazer; (X)
    2) Perguntar quantos jogadores vão jogar; (X)
    3) Criar um objeto pra cada jogador com nome e número tirado; (X)
    4) Guarda todos os objetos em uma lista; (X)
    5) Ordenar esses objetos, sabendo que o vencedor tirou o maior número
    no dado; (X)
    6) Mostrar no final qual jogador ganhou mais rodadas e foi o grande
    campeão. (X)

 */

// -------------------------------------------------------------- Código ----------------------------------------------------------- \\

const prompt = require("prompt-sync")(); // permite usar o prompt.

// // Declaração da função que irá gerar os números de 1 até 6 que irá representar os dados :

function rolarDados() {
  let dado = Math.floor(Math.random() * 6) + 1; 
  return dado;
}

// // Declaração de váriáveis:
var numRodadas; // -------------------------------------------------------> variável que irá receber a quantidade de rodadas...
var numUsuarios; // ------------------------------------------------------> variável que irá receber a quantidade de usuários...
var lista = []; // -------------------------------------------------------> Variável que irá receber as jogas dos dados lançados e seus jogador...
var listaRodadas = []; // ------------------------------------------------> Variável destinada para receber as vitórias por rodada...
var listaVencedor = []; // -----------------------------------------------> Variável destinada para receber os jogadores e suas vitórias...
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
  console.log(`| ============ Rodada ${i + 1} ============ |`); // -----------> Perfumaria, aqui mostra o número da rodada...
  lista.push([]);

  //Loop de jogadores e seus lançamentos...
  for (let j = 0; j < numUsuarios; j++) {
    lista[i].push({
      rodada: i + 1,
      nome: jogador[j],
      dado: rolarDados(),
    });
  }
  lista[i] = lista[i].sort(function (a, b) { // -----------> Função que ordena os números tirados no dado, como (b.dado - a.dado) está invertido ele irá ordenar de forma decrecente... 
    return + (b.dado - a.dado);
  });

  console.log(lista[i]);
  console.log(`|   O vencedor da rodada ${i + 1} foi: ` + lista[i][0].nome + "    |"); 
  console.log();
  listaRodadas.push(lista[i][0].nome);
}
const count = {}; //conta a quantidade de vitorias de cada jogador
for (const num of listaRodadas) {
  count[num] = count[num] ? count[num] + 1 : 1;
}
for (let i = 0; i < numUsuarios; i++) {
  //guarda no array a quantidade de vitorias de cada jogador
  listaVencedor.push({
    nome: jogador[i],
    vitorias: count[jogador[i]],
  });
}
listaVencedor = listaVencedor.sort(function (a, b) { // -----------> Função que ordena os números de vitórias, como (b.vitorias - a.vitorias) está invertido ele irá ordenar de forma decrecente... 
  return + (b.vitorias - a.vitorias);
});
console.log(`| ========== Ranking Final ========= |`); // -----------> Perfumaria...
console.log(listaVencedor);
console.log(`| ================================== |`); // -----------> Perfumaria...


