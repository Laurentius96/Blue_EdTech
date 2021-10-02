//-------------------- CodeLab (Aula 09) - Exercícios 01 -------------- \\

/* 
01- Imprimir números de 1 a 10.
*/
const prompt = require("prompt-sync")(); // permite usar o prompt.

var limite = +prompt("Até onde você quer que conte: ");

for (let i = 1; i <= limite; i++) {
  console.log(`${i}`);
}
