// --------------------------------------------------- Jogo do Detetive ----------------------------------------------- \\
 
 /* Olá, tudo bem? 
    
    O código a seguir foi criado com o intuito para atender o desafio da Blue EdTech.
    Desafio:
    Fazer um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    
    1) Telefonou para a vítima?
    2) Esteve no local do crime?
    3) Mora perto da vítima?
    4) Devia para a vítima?
    5) Já trabalhou com a vítima?
    
    O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
    Se a pessoa responder positivamente para:
    > 2 questões classifique como: ------------> Suspeito; 
    > Entre 3 e 4 questões classifique como: --> Cúmplice; 
    > Às 5 questões classifique como: ---------> Assassino;
    > Nenhuma questão classifique como:--------> Inocente;
 */

// --------------------------------------------------------- Código ---------------------------------------------------- \\
const prompt = require("prompt-sync")(); // permite usar o prompt.


// Introdução ao jogo e suas váriáveis:

console.log("Bot: Olá detetive, tudo bem?"                                                        ); // imprimir texto dentro dos "".
console.log("Bot: Na sua atual investicação, você interrogou uma pessoa."                         ); // imprimir texto dentro dos "".
console.log("Bot: Por favor, digite o primeiro nome do(a) interrogado(a):"                        ); // imprimir texto dentro dos "".     
let nome = prompt("Nome:"                                                                         ); // variável recebendo informação do usuário e guardando em 'nome'. 

console.log("\n" + `Bot: Abaixo estão as perguntas que você fez ao/a ${nome}. Por favor, digitar as respostas do interragado:`); // imprimir texto dentro dos "". OBS: FAZER DE UMA FORMA QUE A PRIMEIRA LETRA SEJA...
console.log("Bot: Observação detetive, por hora, responder SOMENTE com SIM ou NÃO!"               ); // imprimir texto dentro dos "".


// Variáveis das perguntas feitas pelo detetive:

console.log("\n" + "Detetive: Telefonou para a vítima?");   // imprimir texto dentro dos "".
let pergunta_1 = prompt(`${nome}: `);                       // variável recebendo informação do usuário e guardando em 'pergunta_1'.

console.log("Detetive: Esteve no local do crime?");   // imprimir texto dentro dos "".
let pergunta_2 = prompt(`${nome}: `);                 // variável recebendo informação do usuário e guardando em 'pergunta_2'.

console.log("Detetive: Mora perto da vítima?");       // imprimir texto dentro dos "".
let pergunta_3 = prompt(`${nome}: `);                 // variável recebendo informação do usuário e guardando em 'pergunta_3'.

console.log("Detetive: Devia para a vítima?");        // imprimir texto dentro dos "".
let pergunta_4 = prompt(`${nome}: `);                 // variável recebendo informação do usuário e guardando em 'pergunta_4'.

console.log("Detetive: Já trabalhou com a vítima?");  // imprimir texto dentro dos "".
let pergunta_5 = prompt(`${nome}: `);                 // variável recebendo informação do usuário e guardando em 'pergunta_5'.

pergunta_1 = (pergunta_1.toLowerCase());              // transforma o texto na variável 'pergunta_1' em minículo.
pergunta_2 = (pergunta_2.toLowerCase());              // transforma o texto na variável 'pergunta_2' em minículo.
pergunta_3 = (pergunta_3.toLowerCase());              // transforma o texto na variável 'pergunta_3' em minículo.
pergunta_4 = (pergunta_4.toLowerCase());              // transforma o texto na variável 'pergunta_4' em minículo.
pergunta_5 = (pergunta_5.toLowerCase());              // transforma o texto na variável 'pergunta_5' em minículo.

var e_numero_1 =(!isNaN(pergunta_1));                 // verifica se tem número na pergunta_1, retorna (True ou False).
var e_numero_2 =(!isNaN(pergunta_2));                 // verifica se tem número na pergunta_2, retorna (True ou False).
var e_numero_3 =(!isNaN(pergunta_3));                 // verifica se tem número na pergunta_3, retorna (True ou False).
var e_numero_4 =(!isNaN(pergunta_4));                 // verifica se tem número na pergunta_4, retorna (True ou False).
var e_numero_5 =(!isNaN(pergunta_5));                 // verifica se tem número na pergunta_5, retorna (True ou False).

let contador_1;                                       // criando a variável 'contador_1'.                                          
let contador_2;                                       // criando a variável 'contador_2'.  
let contador_3;                                       // criando a variável 'contador_3'.  
let contador_4;                                       // criando a variável 'contador_4'.  
let contador_5;                                       // criando a variável 'contador_5'.  

console.log ("\n");

//------ Para 1ª pergunta ------\\

//verifica se deixou a pergunta em branco ou se colocou um número...
if ((pergunta_1 === "") || (e_numero_1 == true)){                                              
  console.log("Bot: Usuário, por favor preencher corretamente a PRIMEIRA pergunta!"); 
  contador_1 = 3;}

else{
  if ((pergunta_1.includes("sim") == true) || (pergunta_1.includes("não") == true)){  // verifica se foi preenchido com "sim" ou "não"...
    
    if(pergunta_1.includes("sim") == true){                                           // se tiver um "sim"...
      contador_1 = 1;}
   
    else{                                                                             // se tiver um "não"...    
      contador_1 = 0;}
  }   
  else{                                                                               // caso tenha preenchido com outra coisa sem ser "sim" ou "não"...
    console.log("Bot: Usuário, por favor preencher corretamente a PRIMEIRA pergunta!");
      contador_1 = 3;}

}

//------ Para 2ª pergunta ------\\

//verifica se deixou a pergunta em branco ou se colocou um número...
if ((pergunta_2 === "") || (e_numero_2 == true)){
  console.log("Bot: Usuário, por favor preencher corretamente a SEGUNDA pergunta!");
  contador_2 = 3;}

else{
  if ((pergunta_2.includes("sim") == true) || (pergunta_2.includes("não") == true)){  // verifica se foi preenchido com "sim" ou "não"...
    
    if(pergunta_2.includes("sim") == true){                                           // se tiver um "sim"...
      contador_2 = 1;}
   
    else{                                                                             // se tiver um "não"...    
      contador_2 = 0;}
  }   
  else{                                                                               // caso tenha preenchido com outra coisa sem ser "sim" ou "não"...
    console.log("Bot: Usuário, por favor preencher corretamente a SEGUNDA pergunta!");
      contador_2 = 3;}
}

//------ Para 3ª pergunta ------\\

//verifica se deixou a pergunta em branco ou se colocou um número...
if ((pergunta_3 === "") || (e_numero_3 == true)){
  console.log("Bot: Usuário, por favor preencher corretamente a TERCEIRA pergunta!");
    contador_3 = 3;}

else{
  if ((pergunta_3.includes("sim") == true) || (pergunta_3.includes("não") == true)){  // verifica se foi preenchido com "sim" ou "não"...
    
    if(pergunta_3.includes("sim") == true){                                           // se tiver um "sim"...
      contador_3 = 1;}
   
    else{                                                                             // se tiver um "não"...    
      contador_3 = 0;}
  }   
  else{                                                                               // caso tenha preenchido com outra coisa sem ser "sim" ou "não"...
    console.log("Bot: Usuário, por favor preencher corretamente a TERCEIRA pergunta!");
      contador_3 = 3;}
}

//------ Para 4ª pergunta ------\\

//verifica se deixou a pergunta em branco ou se colocou um número...
if ((pergunta_4 === "") || (e_numero_4 == true)){
  console.log("Bot: Usuário, por favor preencher corretamente a QUARTA pergunta!");
  contador_4 = 3;}

else{
  if ((pergunta_4.includes("sim") == true) || (pergunta_4.includes("não") == true)){  // verifica se foi preenchido com "sim" ou "não"...
    
    if(pergunta_4.includes("sim") == true){                                           // se tiver um "sim"...
      contador_4 = 1;}
   
    else{                                                                             // se tiver um "não"...    
      contador_4 = 0;}
  }   
  else{                                                                               // caso tenha preenchido com outra coisa sem ser "sim" ou "não"...
    console.log("Bot: Usuário, por favor preencher corretamente a QUARTA pergunta!");
      contador_4 = 3;}
}

//------ Para 5ª pergunta ------\\

//verifica se deixou a pergunta em branco ou se colocou um número...
if ((pergunta_5 === "") || (e_numero_5 == true)){
  console.log("Bot: Usuário, por favor preencher corretamente a QUINTA pergunta!");
    contador_5 = 3;}

else{
  if ((pergunta_5.includes("sim") == true) || (pergunta_5.includes("não") == true)){  // verifica se foi preenchido com "sim" ou "não"...
    
    if(pergunta_5.includes("sim") == true){                                           // se tiver um "sim"...
      contador_5 = 1;}
   
    else{                                                                             // se tiver um "não"...    
      contador_5 = 0;}
  }   
  else{                                                                               // caso tenha preenchido com outra coisa sem ser "sim" ou "não"...
    console.log("\n" + "Bot: Usuário, por favor preencher corretamente a QUINTA pergunta!");
      contador_5 = 3;}
}

//------ Lógica da classificação ------\\

let contador_final = contador_1 + contador_2 + contador_3 + contador_4 + contador_5; 

if ((contador_1 === 3) || (contador_2 === 3 ) || (contador_3 === 3) || (contador_4 === 3) || (contador_5 === 3)){
   console.log("Bot: Resultado inconclusivo devido ao erro de preenchimento!" + " Por favor, rodar novamente o programa..." );}

else{
  if((contador_final === 5)) {
    console.log(`Bot: Segundo o algoritmo, ${nome} pode ser classificado(a) como: ASSINO(A).`);}

  else if(contador_final === 2){
    console.log(`Bot: Segundo o algoritmo, ${nome} pode ser classificado(a) como: SUSPEITO(A).`);}
  
  else if((contador_final === 3) || (contador_final === 4)){
    console.log(`Bot: Segundo o algoritmo, ${nome} pode ser classificado(a) como: CÚMPLICE do crime.`);}
  
  else{
    console.log(`Bot: Segundo o algoritmo, ${nome} pode ser classificado(a) como: INOCENTE.`);}
}
