// ---------------------- Listas & Comandos ---------------------- \\ 
/*
Lista ---> tipo de dado em js que nos permite ler 
           diversos valores em sequência.

           Em js deve ser declarada entre [].

           pode ter fazer com tipos de dados diferentes (str, int [...]).
           mas não é indicado.

tamanho --> .length()

push -----> método add algo no final da lista 
            ('serve meio que para tudo').

pop ------> método remove algo no final da lista
            pode retornar o valor removido.
            Eu posso guardar então esse valor em outro lugar, 
            por exemplo em uma lista. ---Pegar o exemplo no arquivo "For"

Função vs Métodos:
> funções: todo procedimento que retorna algo.
> métodos: todo procedimento que não retorna nada.


--------------------------------------------------------------------------*/

// // Exemplo 01:
let lista = ["Leonardo", "Willian", "Guilherme", "Pedro", "Cha", "Lorenzo", ["Felipe",10,20,30,40,50]];

console.log(`O tamanho da lista é: ${lista.length}.`);
console.log(lista[5]);
console.log(lista[6][0]);
console.log(lista[6][0][0]);


// // Exemplo 02:
let lista = ["Batman","Leonardo","Felipe","Cha"];

console.log(lista.length);
console.log("Lista original");
console.log(lista);
console.log();

lista.push("Ayrton");
console.log("Lista depois do push");
console.log(lista);
console.log();

// // A função pop, além de remover o último item de uma lsita, me retorna o valor removido. Eu posso guardar então esse valor em outro lugar, por exemplo em uma nova lista.
let removidos = [];
// Criei a lista vazia removidos, e fiz um push com o item retornado pelo pop (removido da lista "lista")
removidos.push(lista.pop());
console.log("Lista depois do pop");
console.log(lista);
console.log(removidos);
console.log();

lista.unshift("Amanda");
console.log("Lista depois do unshift");
console.log(lista);
console.log();


// // Shift funciona como o pop, porém ao invés de remover o último item, remove o primeiro.
removidos.push(lista.shift());
console.log("Lista original e removidos depois do shift");
console.log(lista);
console.log(removidos);
console.log();

// // Splice: Remove, adiciona ou substitui itens de uma lista. Ele pode ter 2 ou mais argumentos, em ordem:
//splice(x,y,ele1,ele2,eleN...);
// x: posição da lista onde será aplicado
// y: quantidade de itens a serem REMOVIDOS!
lista.splice(2,2);
console.log("Lista depois de aplicar o splice - remove");
console.log(lista);

// // Splice - Adicionando novos elementos (Removi 0, e adicionei o que foi passado de argumento depois dele).
lista.splice(2,0,"Caroline","William");
console.log(lista);


// // Splice - Substituindo elementos (escolho a quantidade de itens a serem removidos, e adiciono quantos novos eu quiser no lugar)
// lista.splice(1,2,"Caroline","William","Hector");
// console.log(lista);

// // Localizando um item e removendo da lista.
// // Uso o metodo indexOf para localizar qual a posição do item que quero remover, e coloco como argumento na posição do splice.

console.log("Lista original:");
console.log(lista);
let entrada = prompt("Qual item quer excluir?")
lista.splice(lista.indexOf(entrada),1);
console.log("Lista removido:");
console.log(lista);


// // fill: preenche a minha lista, substituindo os elementos atuais pelo que foi passado no primeiro parâmetro. O segundo parâmetro define onde deve começar a fazer a substituição, e o 3º parâmetro define onde ele não deve mais mexer.
lista.fill("Hudson",1,3);
console.log(lista);

