//-------------------- CodeLab (Aula 09) - Exercícios 09 -------------- \\

/* 

09 - A Sequência de Fibonacci foi descrita primeiramente para descrever o crescimento de
uma população de coelhos. Os números descrevem o número de casais em uma
população de coelhos depois de n meses. Ela funciona assim, você começa com 0 e 1, e
então produz o próximo número de Fibonacci somando os dois anteriores para formar
o próximo, 0+1=1,1+1=2,2+1=3...

Ex: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,...
Monte um algoritmo que possua uma estrutura de repetição e exiba na tela os 10
primeiros termos da sequência de Fibonacci.

Assim, a fórmula a seguir define a sequência:
Fn = Fn - 1 + Fn – 2

*/

var f1 = 0;
var f2 = 1;

for (let i = 1; i <= 20; i++) {
  let fn = f1 + f2;
  console.log();
  console.log(`Fibonacci (${i}) => ${f1} + ${f2} = ${fn}`);
  f1 = f2;
  f2 = fn;
}
