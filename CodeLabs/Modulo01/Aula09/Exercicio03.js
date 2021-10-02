//-------------------- CodeLab (Aula 09) - Exercícios 03 -------------- \\

/* 
03- Imprimir todas as tabuadas do número 1 ao 10.
*/

const prompt = require("prompt-sync")(); // permite usar o prompt.

var tabuada = +prompt("Digite a tabuada que você quer ver: ");
console.log(`
Tabuada escolhida: ${tabuada}
`);
for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${tabuada} = ${i * tabuada}`);
}
console.log();


