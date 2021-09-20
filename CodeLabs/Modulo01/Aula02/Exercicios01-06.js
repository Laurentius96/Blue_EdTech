const prompt = require('prompt-sync')(); // permite
//------------------------------------------------------- CodeLab (Aula 02) - Exercício 01 ao 06 ----------------------------------------------------- \\

// Exercício 1 - Elabore um programa que imprima na tela a seguinte frase Olá Mundo! Esse é o meu primeiro programa

console.log('--Exercício 1--');
console.log('  Olá Mundo!');


// Exercício 2 - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.

console.log('\n--Exercício 2--');
nome = prompt('Digite seu nome:');
endereco = prompt('Digite seu endereço:');
cep = prompt('Digite seu CEP:');

console.log('\n' + 'Seu nome é: ' + nome);
console.log('Seu endereço é: ' + endereco);
console.log('Seu cep é: ' + cep);


// Exercício 3 - Elabore um programa que recebe o nome de uma pessoa do terminal e mostra a seguinte mensagem: Olá {nome}! Seja bem vindo ao fantástico mundo da programação

console.log('\n' + '--Exercício 3--');
nome = prompt('Digite seu nome:');

console.log('\n' + 'Olá ' + nome  + ' seja bem-vindo ao fantástico mundo da programação.');


// Exercício 4 - Elabore um programa que recebe dois valores inteiros e mostra a soma desses valores
//Exemplo:
//Primeiro valor = 2
//Segundo valor = 3
//Soma = 5

console.log('\n'+ '--Exercício 4--');
let valor_1 = parseInt(prompt('Digite o 1° Número:'));
let valor_2 = parseInt(prompt('Digite o 2° número:'));

soma = valor_1 + valor_2

console.log(soma);


//Exercício 5 - Elabore um programa que receba 3 notas de um aluno e calcule a média dele.
//Exemplo:
//Primeira nota = 7
//Segunda nota = 8
//Terceira nota = 10
//Média = 7,75

console.log('\n'+ '--Exercício 5--');
let valor_3 = +prompt('Digite o 1° Número:');
let valor_4 = +prompt('Digite o 2° Número:');
let valor_5 = +prompt('Digite o 3° Número:');

soma = (valor_3 + valor_4 + valor_5)/3

console.log(soma);


//Exercício 6 - Elabore um programa que recebe dois valores inteiros e mostra se o primeiro valor é maior ou igual ao segundo valor
//Exemplo:
//Primeiro valor = 3
//Segundo valor = 2
//Resultado = True

console.log('\n'+ '--Exercício 6--');
let valor_x = +prompt('Digite o 1° Número:');
let valor_y = +prompt('Digite o 2° Número:');

bol = valor_x => valor_y

console.log(bol);