// -------------------------------------------------------- Jogo do Detetive --------------------------------------------------- \\

/*
    Olá, tudo bem? 
    
    O código a seguir foi criado com o intuito para atender o desafio da Blue EdTech.
    Desafio:    

    A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até este momento.

    O programa tem que:

    Receber votos até que o usuário diga que não tem mais ninguém para votar; (X)
    Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; (X)
    Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; (X) 

    Contabilizar os votos de acordo com os significados (X):
    1 = Candidato 1
    2 = Candidato 2
    3 = Candidato 3
    4 = Voto Nulo
    5 = Voto em Branco

    Ter uma função chamada exibirResultados() que deve mostrar: (X)
    - O total de votos para cada candidato 
    - O total de votos nulos
    - O total de votos em branco
    - Qual candidato venceu a votação

*/

// -------------------------------------------------------------- Código ----------------------------------------------------------- \\
const prompt = require("prompt-sync")(); // permite usar o prompt.

// // Funções:

// 1) Ter uma função chamada autorizaVoto()... 
function autorizaVoto(idade) {
  if (idade < 16) {
    return "Negado!";
  } else if (idade >= 16 && idade < 18) {
    return "Opcional.";
  } else if (idade >= 18 && idade <= 70) {
    return "Obrigatório.";
  } else{
    return "Opcional.";
  }
}

// 2) Contabilizar os votos de acordo com os significados - funçãoe que eu criei que é chamada dentro da função votacao(autorizacao)...
function meuVoto() {
  console.log("|============  Eleitor seu voto será?  ============|");
  console.log("|==================================================|");
  console.log("|              Digite: 1 p/ Ana Andrade            |");
  console.log("|              Digite: 2 p/ Bruna Brener           |");
  console.log("|              Digite: 3 p/ Caio Castro            |");
  console.log("|              Digite: 4 p/ Voto Nulo              |");
  console.log("|              Digite: 5 p/ Voto em Branco         |");
  console.log("|==================================================|");
  while (true) {
    console.log("|                                                  |");
    voto = +prompt("                         ");
    console.log("|                                                  |");
    if (voto === 1 || voto === 2 || voto === 3 || voto === 4 || voto === 5) {
      if (voto === 1) {
        console.log("|=================  Sua escolha:  =================|");
        console.log("|                                                  |");
        console.log(`    Você votou no(a) candidato(a): ${condidatos[voto]}.`);
        console.log(`    Obrigado pelo seu voto, você está liberado.      `);
        console.log("|                                                  |");
        console.log("|==================================================|");
        counter_1++;
        lista[0].votos = counter_1;
        break;
      } else if (voto === 2) {
        console.log("|=================  Sua escolha:  =================|");
        console.log("|                                                  |");
        console.log(`    Você votou no(a) candidato(a): ${condidatos[voto]}.`);
        console.log(`    Obrigado pelo seu voto, você está liberado.      `);
        console.log("|                                                  |");
        console.log("|==================================================|");
        counter_2++;
        lista[1].votos = counter_2;
        break;
      } else if (voto === 3) {
        console.log("|=================  Sua escolha:  =================|");
        console.log("|                                                  |");
        console.log(`    Você votou no(a) candidato(a): ${condidatos[voto]}.`);
        console.log(`    Obrigado pelo seu voto, você está liberado.      `);
        console.log("|                                                  |");
        console.log("|==================================================|");
        counter_3++;
        lista[2].votos = counter_3;
        break;
      } else if (voto === 4) {
        console.log("|=================  Sua escolha:  =================|");
        console.log("|                                                  |");
        console.log(`     Você optou pelo: ${condidatos[voto]}.            `);
        console.log(`     Obrigado pelo seu voto, você está liberado.      `);
        console.log("|                                                  |");
        console.log("|==================================================|");
        counter_4++;
        lista[3].votos = counter_4;
        break;
      } else if (voto === 5) {
        console.log("|=================  Sua escolha:  =================|");
        console.log("|                                                  |");
        console.log(`     Você optou pelo: ${condidatos[voto]}.            `);
        console.log(`     Obrigado pelo seu voto, você está liberado.      `);
        console.log("|                                                  |");
        console.log("|==================================================|");
        counter_5++;
        lista[4].votos = counter_5;
        break;
      }
    } else {
      console.log("|==================================================|");
      console.log("|+++++ Por favor, escolher uma opção válida! ++++++|");
      console.log("|==================================================|");
    }
  }
}

// 3) Ter uma função chamada votacao(autorizacao, voto)...
function votacao(autorizacao) {
  if (autorizacao == "Negado!") {
    console.log("| ++++++++++++ Eleitor não pode votar! +++++++++++ |");
    console.log("|==================================================|");
  } else if (autorizacao == "Opcional.") {
    console.log("| ++++++++ Eleitor não é obrigado a votar! +++++++ |");
    console.log("|==================================================|");
    meuVoto();
  } else {
    console.log("| ++++++++++++++ Voto Obrigatório! +++++++++++++++ |");
    console.log("|==================================================|");
    meuVoto();
  }
}

// 4) Ter uma função chamada exibirResultados()...
function exibirResultados() {
  lista = lista.sort(function (a, b) {
    return +(b.votos - a.votos);
  });
  console.log("|==================== Resultado ===================|");
  console.log("|                                                  |");
  console.log(
    `|              Ana Andrade: ${counter_1} votos.               |`
  );
  console.log(
    `|              Bruna Brener: ${counter_2} votos.              |`
  );
  console.log(
    `|              Caio Castro: ${counter_3} votos.               |`
  );
  console.log(
    `|              Votos Nulos: ${counter_4} votos.               |`
  );
  console.log(
    `|              Voto em Branco: ${counter_5} votos.            |`
  );
  console.log("|                                                  |");
  console.log("|==================================================|");
  console.log("|                                                  |");
  console.log(`  +++  O vencedor nessa urna foi: ${lista[0].candidato} +++`);
  console.log("|                                                  |");
  console.log("|==================================================|");
  console.log();
}

// // Declaração de variáveis:
var continuar = 1;
var anos;
var voto;
var counter_1 = 0;
var counter_2 = 0;
var counter_3 = 0;
var counter_4 = 0;
var counter_5 = 0;
const condidatos = [
  "",
  "Ana Andrade",
  "Bruna Brener",
  "Caio Castro",
  "Voto Nulo",
  "Voto em Branco",
];
var lista = [
  { candidato: "Ana Andrade", votos: 0 },
  { candidato: "Bruna Brener", votos: 0 },
  { candidato: "Caio Castro", votos: 0 },
  { candidato: "Voto Nulo", votos: 0 },
  { candidato: "Voto em Branco", votos: 0 },
];

// // Chamando as funções:

while (continuar == 1) {
  console.log("|================  Urna Eletrônica  ===============|");
  console.log("|                                                  |");
  anos = autorizaVoto(+prompt("                 Idade do eleitor: ")); // ---------------------------> Escolha do usuáro...
  console.log("|                                                  |");
  console.log("|==================================================|");

  votacao(anos);

  console.log("|================  Urna Eletrônica  ===============|");
  console.log("|            Mesário, devemos continuar?           |");
  console.log("|                 Digite: 1 p/ SIM                 |");
  console.log("|                 Digite: 2 p/ NÃO                 |");
  console.log("|==================================================|");
  console.log("|                                                  |");
  continuar = +prompt("                          "); // ---------------------------> Escolha do usuáro...
  console.log("|                                                  |");
  if (continuar == 2) {
    console.log("|==================================================|");
    console.log("|                                                  |");
    console.log("| ++++++++++++++ Fim das Operações!! +++++++++++++ |");
    console.log("|                                                  |");
  }
}

exibirResultados();

