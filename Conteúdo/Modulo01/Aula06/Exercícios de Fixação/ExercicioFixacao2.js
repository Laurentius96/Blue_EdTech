const prompt = require('prompt-sync')(); // permite
//==== Exercícios de Fixação 02 ====\\

/* 
 Crie um array que tenha 7 números e mostre no console cada
 número somado de +1.
*/

let lista = [0, 1, 2, 3, 4, 5, 6];

for (let percorre of lista){

    console.log(`Número da lista ${percorre} + 1 = ${percorre + 1}.`);
    
}