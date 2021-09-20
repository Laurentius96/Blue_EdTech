const prompt = require("prompt-sync")(); // permite usar o prompt
/* ---------------------- Estruturas de repetição - Laço for ----------------------  

1) Laço for tradicional:
    1° argumento: Defino o valor inicial de inicial de in
    2° argumento: Condição de parada de for 
    3° argumento: incrementando (aumentando) o valor de i

 i+=2 -> i + 2
 i-=5 -> i - 5 

    for(let 1° argumento; 2° argumento; 3° argumento){
        
       código a ser executado
    }

 2) Laço for in:
    
    for ((variável) in (objeto)){
        
        código a ser executado
    }

 *) For of != For in 
      For of == retorna os valores
      For in == retorna os indices

 3) ForEach

-------------------------------------------------------------------------*/

// 1) For:
// Exemplo 01:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//----------------------------------

// 2) Dicionário:
// Exemplo 01:
let carro = { modelo: `A3 Sedan`, marca: `Audi`, ano: 2022 }; //Dicionário 'caracteristicas : valor'

for (let caracteristicas in carro) {
  console.log(caracteristicas + ":" + carro[caracteristicas]);
}


// Exemplo 02:
let filme = { nome: "O exorcista", ano: 1973, genero: "Terror" };

for (let dados in filme) {
  console.log(dados + ":" + filme[dados]);
}

// Exemplo 03:
let letras = ["A", "B", "C", "D"];
for (let i in letras) {
  console.log(i);
}

//----------------------------------

// 3) forEach
// Exemplo 01:
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDo2(item) {
  console.log(item * 2);
}

numeros.forEach(tabuadaDo2);

/*****************************************/

// Complemento do Professor Gabriel:
var lista_1 = ["Leonardo", "Willian", "Guilherme", "Pedro", "Cha", "Lorenzo", "Ivan"];
console.log(`O tamanho da lista é: ${lista_1.length}.`);
let lista_2 = [10, 20, 30, 40, 50]
let lista_3 = {nome: `Leonardo`, idade: 20, cidade: `Londrina`};


// (for of) me traz o valor do elemento. Ele traz uma...
for (let i of lista_1){
  console.log(`Valor de i é: ${i}`);
}

for (let i of lista_2){
  console.log(`Valor de i é: ${i}`);
}

//-----------------------------------------

// (for in) me traz a posição do elemnto (nesse caso, o indice). Ele traz uma
for (let i in lista_1){
  console.log(`Valor de i é: ${i}`);
}

for (let i in lista_2){
  console.log(`Valor de i é: ${i}`);
}

//-----------------------------------------

// forEach - ele vai retornar por padrão: (Valor, ixdex, lista inteira) 
// só para listas (array).

let lista_4 =  ["Leonardo", "Willian", "Guilherme", "Pedro", "Cha", "Lorenzo", "Ivan"];

function percorreLista(value,index,array){
  console.log(`O 1° parametro é: ${value}`);
  console.log(`O 2° parametro é: ${index}`);
  console.log(`O 3° parametro é: ${array}`);
  console.log();
}

lista_4.forEach(percorreLista);