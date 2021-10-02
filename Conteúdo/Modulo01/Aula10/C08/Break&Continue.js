//-------------------------------------- Exemplo 01 ------------------------------------------------------------------*/
/* 
 Break --> O comando “break” serve para encerrar a leitura. O break é um comando
 que podemos utilizar quando queremos parar/encerrar o laço de repetição 
 na hora. A instrução break interrompe o laço e continua executando o código
 após o loop (se houver).

 Continue --> Com este comando, é possível iniciar a próxima 
 repetição do loop. A instrução continue interrompe uma iteração 
 (no laço de repetição), se uma condição específica ocorrer, e continua
 com a próxima iteração no laço de repetição.


*/
// // ------------------------------------------- Break:
let carros = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  console.log(carros[0]);
  console.log(carros[1]);
  break list;
  console.log(carros[2]);
  console.log(carros[3]);
}

// // ------------------------------------------- Continue: 
for (let i = 1; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log("O número atual é: " + i);
}