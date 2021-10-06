const prompt = require("prompt-sync")();
console.log("------Projeto 03 - Dice Game------");

function rolaDado() {
  //função de rolagem do dado
  let dado = Math.floor(Math.random() * 6) + 1;
  return dado;
}

let qtdRodadas = prompt("Digite o numero de rodadas: ");
let qtdJogadores = prompt("Digite o numero de jogadores: ");
var lista = [];
var vencedorrodada = []; //array que guarda as vitorias por rodada
var vencedores = []; //array que guarda as vitorias totais

for (let c = 0; c < qtdRodadas; c++) {
  //Loop de rodadas
  console.log(`Rodada ${c + 1}`);
  lista.push([]);

  for (let i = 0; i < qtdJogadores; i++) {
    //Loop de jogadores
    var jogador = `Jogador${i + 1}`;

    lista[c].push({
      rodada: c + 1,
      nome: jogador,
      dado: rolaDado(),
    });
  }
  lista[c] = lista[c].sort(function (a, b) {
    return +(b.dado - a.dado);
  });

  console.log(lista[c]);
  console.log(`O vencedor da ${c + 1} rodada foi:` + lista[c][0].nome);
  vencedorrodada.push(lista[c][0].nome);
}
const count = {}; //conta a quantidade de vitorias de cada jogador
for (const num of vencedorrodada) {
  count[num] = count[num] ? count[num] + 1 : 1;
}
for (let x = 0; x < qtdJogadores; x++) {
  //guarda no array a quantidade de vitorias de cada jogador
  vencedores.push({
    nome: `Jogador${x + 1}`,
    vitorias: count[`Jogador${x + 1}`],
  });
}
console.log("##########Ranking Final##########");
console.log(vencedores);
console.log("#################################");