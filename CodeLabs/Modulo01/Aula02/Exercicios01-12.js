//------------------------------------------------------- CodeLab (Aula 02) - Exercício 01 ao 12 ----------------------------------------------------- \\

const prompt = require("prompt-sync")(); // permite usar o prompt

// //  Exercício 1 - Frase na tela - Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!".

console.log("-- Exercício 01 --");
console.log(" O primeiro programa a gente nunca esquece!do!");

// // Exercício 2 - Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.

console.log("\n-- Exercício 02 --");
var nam = prompt("Digite seu nome, por favor: ");
var end = prompt("Digite seu endereço, por favor: ");
var cep = prompt("Digite seu CEP, por favor: ");
var tel = prompt("Digite seu telefone, por favor: ");

console.log(
  `\nSeu nome é ${nam}; \nSeu endereço é: ${end}; \nSeu CEP é: ${cep} e seu telefone é: ${tel}.`
);

// // Exercício 3 - Letra de música - Faça um programa que mostre na tela uma letra de música que você gosta (proibido letras do Justin Bieber).

console.log("\n-- Exercício 03 --");
console.log(`\nHOIST THE COLOURS

The king and his men stole the queen from her bed
And bound her in her bones
The seas be ours and by the powers
Where we will, we'll roam

Yo-ho, all together
Hoist the colors high
Heave ho, thieves and beggars
Never shall we die
 `);

/* Exercício 4 - Tabela de notas - Você foi contratado ou contratada por uma escola para fazer o sistema de boletim dos alunos.

Como primeiro passo, escreva um programa que produza a seguinte saída:
ALUNO (A) NOTA
==============
ALINE 9.0
MÁRIO DEZ
SÉRGIO 4.5
SHIRLEY 7.0

*/

console.log("\n-- Exercício 04 --");
var aline = prompt("Digite a nota da Aline: ");
var mario = prompt("Digite a nota do Mário: ");
var sergio = prompt("Digite a nota do Sérgio: ");
var shirley = prompt("Digite a nota da Shirley: ");

console.log(`\nALUNO (A) NOTA
==============
ALINE: ${aline}
MÁRIO: ${mario}
SÉRGIO: ${sergio}
SHIRLEY: ${shirley}
`);

/*Exercício 5 - Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

Cadastro de Clientes

0 – Fim
1 - Inclui
2 - Altera
3 - Exclui
4 - Consulta

*/

console.log("\n-- Exercício 05 --");
var opcao;
var lista = ["Fim", "Inclui", "Altera", "Exclui", "Consulta"];
console.log(`\n Cadastro de Clientes

0 – Fim
1 - Inclui
2 - Altera
3 - Exclui
4 - Consulta
`);
opcao = prompt("Por favor, escolha uma das opções acima: ");
console.log(`\nSua escolha foi ${lista[opcao]}.`);

/*Exercício 6 - Calculadora de Dano - Escreva um programa que receba dois
valores digitados pelo usuário:

• Quantidade de vida de um monstro (entre 10 e 50);
• Valor do ataque do jogador por turno (entre 5 e 10);
• Baseado nos valores digitados, exiba a quantidade de turnos que o
jogador irá demorar para conseguir derrotar o monstro.
• O jogador irá derrotar o monstro em 8 turnos.

*/

console.log("\n-- Exercício 06 --");
var vidaMonstro;
var ataqueJogador;

console.log(`\nJOGO DE RPG:`);
console.log(`
Qual é a quantidade de vida do monstro?`);
vidaMonstro = +prompt(">Escolha entre 10 e 50: ");
console.log(`
Qual é o valor do seu ataque?`);
ataqueJogador = +prompt("> Escolha entre 5 e 10: ");
var turno = Math.round(vidaMonstro / ataqueJogador);
console.log(`
O jogador irá derrotar o monstro em ${turno} turnos.`);

/*Exercício 7 - E os 10% do garçom?
• Defina uma variável para o valor de uma refeição que custou R$ 42,54;
• Defina uma variável para o valor da taxa de serviço que é de 10%;
• Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.

*/

console.log("\n-- Exercício 07 --");

var refeicao;
var taxa;
var calculo;

refeicao = +prompt(
  "Qual foi o valor da refeição? (use pontos para as casas decimais): "
);
taxa = +prompt("Qual é o valor da taxa de serviço? (em porcentagem): ");
calculo = refeicao + refeicao * (taxa / 100);
console.log(`O valor total foi R$ ${calculo.toFixed(2)}`);

/*Exercício 8 - Qual o valor do troco?
• Defina uma variável para o valor de uma compra que custou R$100,98;
• Defina uma variável para o valor que o cliente pagou R$150,00;
• Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.

*/

console.log("\n-- Exercício 08 --");
var compra;
var cliente;
var troco;

compra = +prompt(
  "Qual foi o valor da compra?: (use pontos para as casas decimais): R$"
);
cliente = +prompt(
  "Quanto o cliente pagou?: (use pontos para as casas decimais): R$"
);
troco = cliente - compra;

if (troco >= 0) {
  console.log(`\nO troco é de R$${troco.toFixed(2)}`);
} else {
  console.log(`\nFalta R$${troco.toFixed(2) * -1} para finalizar à compra.
`);
}

/*Exercício 9 - Você está na flor da idade?
• Defina uma variável para o valor do ano do nascimento;
• Defina uma variável para o valor do ano atual;
• Defina uma variável que calcula o valor final da idade da pessoa;
• Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".

*/

console.log("\n-- Exercício 09 --");
var ano;
var atual;
var idade;

ano = +prompt("Qual o seu ano de nacimento? (Ex.: 1996): ");
atual = +prompt("Qual o ano atual? (Ex.: 2021): ");
idade = atual - ano;

if (idade <= 18) {
  console.log(`\nVocê é um bebê com ${idade} aninhos!`);
} else if (18 < idade <= 25) {
  console.log(`\nVocê está na flor da idade com ${idade} aninhos!`);
} else {
  console.log(
    `\nJá vai pensando na aposentadoria velinho, você têm ${idade} anos!`
  );
}

/*Exercício 10 - Conversor de moedas
Crie um programa que solicite um um valor em real ao usuário e converta esse
valor, para:

• DOLAR
• EURO
• LIBRA ESTERLINA
• DÓLAR CANADENSE
• PESO ARGENTINO
• PESO CHILENO

Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real.
Mostrar o resultado no formato U$9999.99

*/

console.log("\n-- Exercício 10 --");
var moeda;
var cotacao;
var conversao;
var dinheiro;
var listaMoeda = [
  "DOLAR",
  "EURO",
  "LIBRA ESTERLINA",
  "DÓLAR CANADENSE",
  "PESO ARGENTINO",
  "PESO CHILENO",
];
console.log(`\n Escolha a Moeda que quer converter

0 – DOLAR
1 - EURO
2 - LIBRA ESTERLINA
3 - DÓLAR CANADENSE
4 - PESO ARGENTINO
5 - PESO CHILENO

`);
moeda = prompt("Por favor, escolha uma das opções acima: ");
console.log(`\nSua escolha foi ${listaMoeda[moeda]}.`);
cotacao = prompt(
  `Por favor, digite a cotação da moeda ${listaMoeda[moeda]}: R$`
);
dinheiro = prompt(
  `Por favor, digite a quantidade em REAL que você quer converter: R$`
);
conversao = cotacao * dinheiro;
console.log(`
A conversão de ${listaMoeda[moeda]} para REAL foi de: R$${conversao.toFixed(2)}
`);

/*Exercício 11 - Calculadora de aumento de aluguel - Parte 1

A sua calculadora vai receber o valor do aluguel e calcular o aumento baseado
no IGPM de 31%. A calculadora deve apresentar o aluguel reajustado no formato R$9999.99

Exemplo:
Valor do aluguel = 1000
Valor do aluguel reajustado = R$ 1310,00

*/

console.log("\n-- Exercício 11 --");

function aumentoAluguel(a,b) {

  let ajuste = ( a + (a * (b/100))

  return ajuste
}

var aluguel = prompt("O aluguel atual é: ");
var igpm = prompt("O IGPM atual é: ");

var valor = aumentoAluguel(aluguel, igpm);

console.log(`Valor do aluguel reajustado é: R$ ${valor.toFixed(2)}`);

/*Exercício 12- Calculadora de aumento de aluguel - Parte 2

Altere sua calculadora (feita na parte 1) para receber além do valor do aluguel,o percentual do reajuste no formato 99%.

Dica: Descubra uma forma de transformar o percentual recebido em um
número para efetuar o cálculo.
Exemplo:
Valor do aluguel = 1000
Percentual do reajuste = 31%
Valor do aluguel reajustado = R$1310,00

*/

let valorAluguel = +prompt("Digite o valor o vlaor do aluguel: ");
let igpm = prompt("Digite o percentual do ajuste: ");
let igpmAjustado = (+igpm.replace("%", ""));
var conta = valorAluguel + (valorAluguel * igpmAjustado/100);

console.log(`Valor do aluguel reajustado é: R$ ${conta.toFixed(2)}`);
