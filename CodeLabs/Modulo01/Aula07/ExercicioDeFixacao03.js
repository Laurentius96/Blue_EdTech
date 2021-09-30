//-------------------- CodeLab (Aula 07) - Fixação 03 -------------- \\

/*

03. Crie uma string e mostre no console ela letra por letra.

*/

const prompt = require("prompt-sync")();

var texto = prompt("Digite seu texto: ");
contador = 0;

var ajuste = (((((texto.replace(/\s+/g, "")).replace(",","")).replace("!","")).replace("?","")).replace(".",""));

for(let i of ajuste){
    console.log(ajuste[contador]);
    contador++;
}

console.log(`O texto possui: ${contador} letras.`);