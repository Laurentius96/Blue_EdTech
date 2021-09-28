const prompt = require('prompt-sync')(); // permite
//==== Exercícios de Fixação 01 ====\\

/* 
Crie um array que tenha nomes de 7 pessoas e mostre no console o nome de
cada pessoa, uma de cada vez.
*/

var lista = ["Ana", "Bruna", "Carlos", "Bernardo", "Marcelo", "Lorenzo", "Jõao"];
var contador = 0;

for (let percorre of lista){

    console.log(`O nome do index ${contador} é: ${percorre}.`);
    contador += 1; 

}