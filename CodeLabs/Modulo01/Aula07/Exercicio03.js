//-------------------- CodeLab (Aula 07) - Exercício 03 -------------- \\

/*
3. Contar a quantidade de palavras em um texto.
*/

const prompt = require("prompt-sync")();

var texto = prompt("Digite seu texto: ")
var palavras = texto.split(" ", );
console.log(palavras);
contador = 0;

for (let i of palavras) {
    contador ++;
}

console.log(contador);

// // 