// ------------------------------ Desafio 02 ------------------------------\\
/* 
 Crie um Dicionário de carros, com no mínimo 7 carros, contendo os 
 seguites campos: id, modelo, marca e preço. Todas as informações serão
 recebidas pelo prompt. O usuário pode comprar mais de um carro e 
 programa deverá retornar o valor total de venda. Enquanto o usuário 
 optar por comprar menos do que 3 carros, o programa deverá exibir a 
 seguinte mensagem: "Deseja comprar outro carro?" em caso afirmativo o
 programa continua em execução, caso contrário é finalizado. 
 O programa deve retornar o valor total no padrão monetário - R$50.000,000.

 **Dica**: Sempre reveja o que você escreveu.

*/
const prompt = require('prompt-sync')(); // permite usar o prompt

let carro = {
  id: `001`,
  modelo: `Gol`,
  marca: `Volkswagen`,
  preco: 62000,
  id: `002`,
  modelo: `A3`,
  marca: `Audi`,
  preco: 153000,
  id: `003`,
  modelo: `Ka`,
  marca: `Ford`,
  preco: 51000,
  id: `004`,
  modelo: `HB20`,
  marca: `Hyundai`,
  preco: 59290,
  id: `005`,
  modelo: `KaPajero Full`,
  marca: `Mitsubishi`,
  preco: 283990,
  id: `006`,
  modelo: `Renegade`,
  marca: `Jeep`,
  preco: 69000,
  id: `007`,
  modelo: `HR-V`,
  marca: `Honda`,
  preco: 109700,
};



  let pergunta = prompt("Qual carro você gostaria de comprar?: ");
  

