//-------------------- CodeLab (Aula 09) - Exercícios 02 -------------- \\

/* 
02- Imprimir a tabuada do número 8.
*/
const prompt = require("prompt-sync")(); // permite usar o prompt.

console.log("Tabuada do 8");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x 8 = ${i * 8}`);
  console.log();
}
