// -------------------------------------------------------- Jogo do Detetive --------------------------------------------------- \\

/*
    Olá, tudo bem? 
    
    O código a seguir foi criado com o intuito para atender o desafio da Blue EdTech.
    Desafio:    

    A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até este momento.

    O programa tem que:

    Receber votos até que o usuário diga que não tem mais ninguém para votar; ()
    Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; ()
    Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; () 

    Contabilizar os votos de acordo com os significados ():
    1 = Candidato 1
    2 = Candidato 2
    3 = Candidato 3
    4 = Voto Nulo
    5 = Voto em Branco
    Ter uma função chamada exibirResultados() que deve mostrar: ()
    - O total de votos para cada candidato 
    - O total de votos nulos
    - O total de votos em branco
    - Qual candidato venceu a votação

*/

// -------------------------------------------------------------- Código ----------------------------------------------------------- \\
const prompt = require("prompt-sync")(); // permite usar o prompt.

// // Declaração de váriáveis:
var continuar = 1;
let idade;
let confirmacao_idade;
let resposta_ano;
let liberar_resultado;
let confirmacao = 0;
let counter_1 = 0;
let counter_2 = 0;
let counter_3 = 0;
let counter_4 = 0;
let counter_5 = 0;
const condidatos = [
  "",
  "Ana Andrade",
  "Bruna Brener",
  "Caio Castro",
  "Voto Nulo",
  "Voto em Branco",
];

// // Funções da Urna.

// Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; ()

function autorizaVoto(anonascimento) {
  idade = 2021 - anonascimento;
  if (idade < 16) {
    return (confirmacao_idade = "Negado!");
  } else if (16 <= idade < 18) {
    return (confirmacao_idade = "Opcional.");
  } else {
    return (confirmacao_idade = "Obrigatório.");
  }
}

// Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar",

function votacao(confirmacao_idade) {
  if (
    confirmacao_idade === "Opcional." ||
    confirmacao_idade === "Obrigatório."
  ) {
    console.log("|============  Eleitor seu voto será?  ============|");
    console.log("|              Digite: 1 p/ Ana Andrade            |");
    console.log("|              Digite: 2 p/ Bruna Brener           |");
    console.log("|              Digite: 3 p/ Caio Castro            |");
    console.log("|              Digite: 4 p/ Voto Nulo              |");
    console.log("|              Digite: 5 p/ Voto em Branco         |");
    console.log("|==================================================|");
    voto = +prompt("");
    while (confirmacao == 0) {
      if (voto === 1 || voto === 2 || voto === 3 || voto === 4 || voto === 5) {
        if (voto === 1) {
          console.log("|=================  Sua escolha:  =================|");
          console.log(`  Você votou no(a) candidato(a): ${condidatos[voto]}.`);
          console.log(`   Obrigado pelo seu voto, você está liberado.      `);
          console.log("|==================================================|");
          counter_1++;
          confirmacao = 1;
        } else if (voto === 2) {
          console.log("|=================  Sua escolha:  =================|");
          console.log(`  Você votou no(a) candidato(a): ${condidatos[voto]}.`);
          console.log(`   Obrigado pelo seu voto, você está liberado.      `);
          console.log("|==================================================|");
          counter_2++;
          confirmacao = 1;
        } else if (voto === 3) {
          console.log("|=================  Sua escolha:  =================|");
          console.log(`  Você votou no(a) candidato(a): ${condidatos[voto]}.`);
          console.log(`   Obrigado pelo seu voto, você está liberado.      `);
          console.log("|==================================================|");
          counter_3++;
          confirmacao = 1;
        } else if (voto === 4) {
          console.log("|=================  Sua escolha:  =================|");
          console.log(`   Você optou pelo: ${condidatos[voto]}.            `);
          console.log(`   Obrigado pelo seu voto, você está liberado.      `);
          console.log("|==================================================|");
          counter_4++;
          confirmacao = 1;
        } else if (voto === 5) {
          console.log("|=================  Sua escolha:  =================|");
          console.log(`   Você optou pelo: ${condidatos[voto]}.            `);
          console.log(`   Obrigado pelo seu voto, você está liberado.      `);
          console.log("|==================================================|");
          counter_5++;
          confirmacao = 1;
        }
      } else {
        console.log("Por favor, escolher uma opção válida!");
        confirmacao = 0;
      }
    }
  } else {
    console.log("Eleitor não pode votar!");
  }
}

// Ter uma função chamada votacao(autorizacao, voto) que valida e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado;
// Ter uma função chamada exibirResultados() que deve mostrar: ()

function apurar(apuracao) {
  if (apuracao == 1) {
    console.log("|==================== Resultado ===================|");
    console.log(`|           Ana Andrade: ${counter_1} votos.       |`);
    console.log(`|           Bruna Brener: ${counter_2} votos.      |`);
    console.log(`|           Caio Castro: ${counter_3} votos.       |`);
    console.log(`|           Votos Nulos: ${counter_4} votos.       |`);
    console.log(`|           Voto em Branco: ${counter_5} votos.    |`);
    console.log("|==================================================|");
  } else {
    console.log();
  }
}

// // Perguntar para continuar a votação:

while (continuar == 1) {
  console.log("|================  Urna Eletrônica  ===============|");
  resposta_ano = autorizaVoto(+prompt("Idade do eleitor:"));

  console.log("|================  Urna Eletrônica  ===============|");
  console.log("|            Mesário, devemos continuar?           |");
  console.log("|                 Digite: 1 p/ SIM                 |");
  console.log("|                 Digite: 2 p/ NÃO                 |");
  continuar = +prompt("                         "); // ---------------------------> Escolha do usuáro...
  console.log("|==================================================|");
}

while (liberar_resultado == 1) {
  console.log("|                    Resultado:                    |");
  console.log("|==================================================|");
  console.log("|       Mesário, já podemos apurar à urnas?        |");
  console.log("|                 Digite: 1 p/ SIM                 |");
  console.log("|                 Digite: 2 p/ NÃO                 |");
  liberar_resultado = +prompt("                         "); // ---------------------------> Escolha do usuáro...
  console.log("|==================================================|");

  if (liberar_resultado === 1) {
    apuracao = apurar(liberar_resultado);
  } else {
    console.log();
  }
}
