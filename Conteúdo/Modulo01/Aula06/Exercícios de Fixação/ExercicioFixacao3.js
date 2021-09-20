//==== Exercícios de Fixação 03 ====\\

/* 
  Crie uma string e mostre no console ela letra por letra.
*/

let texto = ("Olá mundo, esse é meu texto de exemplo.");
var contador = 0;

for (let percorre of texto){

    console.log(`soletrando o seu texto: ${percorre}`);
    contador = contador + 1;
}

console.log(`Total de letras: ${contador}`);


