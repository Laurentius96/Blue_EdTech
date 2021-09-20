// ------------------------------------------------------- Jogo do JoKenPô --------------------------------------------------- \\

/* Olá, tudo bem? 
    
    O código a seguir foi criado com o intuito para atender o desafio da Blue EdTech.

    Desafio:
    Criar um programa que jogue pedra, papel e tesoura (Jokenpô) com você.

    O programa tem que:
    1) Permitir que eu decida quantas rodadas iremos fazer;(x)
    2) Ler a minha escolha (Pedra, papel ou tesoura); (x)
    3) Decidir de forma aleatória a decisão do computador;(X)
    4) Mostrar quantas rodadas cada jogador ganhou;(x)
    5) Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);(+/-)
    6) Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não 
       finalize o programa.()

 */

// ------------------------------------------------------------- Código -------------------------------------------------------- \\

const prompt = require("prompt-sync")(); // permite usar o prompt.

// Declaração de variáveis:
var pontos_us = 0;
var pontos_pc = 0;
const opcao = ["", "Pedra", "Papel", "Tesoura"];
let i;
let j = 0;
let n_jogadas = 1;

// Número de rodadas?:
// console.log("|============= JoKenPô ============|");
// console.log("|  Quantas rodadas iremos jogar?   |");
// let n_rodadas = +prompt("                 ");
// console.log("|==================================|");

// Jogar novamente:
for (j = 0; j < n_jogadas; j++) {
  console.log("|============= JoKenPô ============|");
  console.log("|  Quantas rodadas iremos jogar?   |");
  let n_rodadas = +prompt("                 ");
  console.log("|==================================|");

  //Repetição das jogadas
  for (i = 1; i <= n_rodadas; i++) {
    // Função das jogadas:
    function rodada(jogada_us) {
      if (jogada_us == 1 || jogada_us == 2 || jogada_us == 3) {
        jogada_pc = Math.floor(Math.random() * 3 + 1);
        if (
          (jogada_us == 1 && jogada_pc == 3) ||
          (jogada_us == 2 && jogada_pc == 1) ||
          (jogada_us == 3 && jogada_pc == 2)
        ) {
          console.log("|==================================|");
          console.log("|=== Você ganhou essa rodada!!! ===|");
          console.log("|==================================|");
          console.log(`  Você escolheu: ${opcao[jogada_us]}`);
          console.log(`  O PC escolheu: ${opcao[jogada_pc]}`);
          pontos_us += 1;
          console.log(`  Usuário tem: ${pontos_us} pontos. `);
          console.log(`  O PC tem: ${pontos_pc} pontos.    `);
          console.log("|==================================|");
          console.log();
          console.log();
        } else if (
          (jogada_us == 1 && jogada_pc == 1) ||
          (jogada_us == 2 && jogada_pc == 2) ||
          (jogada_us == 3 && jogada_pc == 3)
        ) {
          console.log("|==================================|");
          console.log("|=== Empate! Ambos não pontuam! ===|");
          console.log("|==================================|");
          console.log(`  Você escolheu: ${opcao[jogada_us]}`);
          console.log(`  O PC escolheu: ${opcao[jogada_pc]}`);
          console.log(`  Usuário tem: ${pontos_us} pontos. `);
          console.log(`  O PC tem: ${pontos_pc} pontos.    `);
          console.log("|==================================|");
          console.log();
          console.log();
        } else {
          console.log("|==================================|");
          console.log("|==== O PC ganhou essa rodada! ====|");
          console.log("|==================================|");
          pontos_pc += 1;
          console.log(`  Você escolheu: ${opcao[jogada_us]}`);
          console.log(`  O PC escolheu: ${opcao[jogada_pc]}`);
          console.log(`  Usuário tem: ${pontos_us} pontos. `);
          console.log(`  O PC tem: ${pontos_pc} pontos.    `);
          console.log("|==================================|");
          console.log();
          console.log();
        }
      } else {
        console.log("|==================================|");
        console.log("| Jogada inválida! PC ganha ponto. |");
        console.log("|==================================|");
        pontos_pc += 1;
        console.log(`| Usuário tem: ${pontos_us} pontos.                |`);
        console.log(`| O PC tem: ${pontos_pc} pontos.                   |`);
        console.log("|==================================|");
        console.log();
        console.log();
      }
    }

    // Comandos do Usuário & Apresentação::
    console.log("|============= JoKenPô ============|");
    console.log("|     > Escolha (1) para Pedra     |");
    console.log("|     > Escolha (2) para Papel     |");
    console.log("|     > Escolha (3) para Tesoura   |");
    console.log("|==================================|");

    console.log(`|  Faça sua Escolha - Rodada(${i}):   |`);
    var escolha_us = rodada(+prompt("                "));
  }

  if (pontos_us > pontos_pc) {
    console.log("|==================================|");
    console.log("| Parabêns, você ganhou o JoKenPô! |");
    console.log("|==================================|");
  } else if (pontos_us == pontos_pc) {
    console.log("|==================================|");
    console.log("|      Você e o PC empataram!!     |");
    console.log("|==================================|");
  } else {
    console.log("|==================================|");
    console.log("|      Que pena! O PC ganhou...    |");
    console.log("|==================================|");
  }

  console.log("|      Quer jogar novamente?       |");
  console.log("|        Digite: 1 p/ SIM          |");
  console.log("|        Digite: 2 p/ NÃO          |");
  console.log("|==================================|");
  let escolha = +prompt("                 ");
  console.log("|==================================|");

  if (escolha === 1) {
    console.log("|            Novo jogo!            |");
    console.log("|==================================|");
    console.log();
    console.log();
    pontos_pc = 0;
    pontos_us = 0;
    j--;
  } else {
    console.log("|           Fim de jogo!           |");
    console.log("|==================================|");
  }
}
