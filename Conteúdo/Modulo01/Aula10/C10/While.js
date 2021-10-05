/* ------------ Estruturas de repetição (Aula 10) - While ------------  


1) While

    • A declaração WHILE cria um laço que executa uma rotína
    específica enquanto a condição de teste for avaliada como
    verdadeira. A condição é avaliada antes da execução da rotina.

    • Exemplo:
        while (condição){
        rotina
        }

    • Condição: uma expressão avaliada antes de cada passagem
    através do laço. Se essa condição for avaliada como verdadeira,
    a rotina é executada. Quando a condição for avaliada como
    falsa, a execução continua na declaração após o WHILE.
    • Rotina: uma declaração que é executada enquanto a condição
    é avaliada como verdadeira.

    • Exemplos: o seguinte laço WHILE itera enquanto n é menor que três.

        var n = 0; var x = 0;
        while (n < 3){
        n ++;
        x += n;
        }
        • Cada iteração, o laço incrementa n e soma à x. Portanto, x e n
        assumem os seguintes valores:
        • Depois da primeira passagem: n = 1 e x = 1
        • Depois da segunda passagem: n = 2 e x = 3
        • Depois da terceira passagem: n = 3 e x = 6
       
        Depois de completar a terceira passagem, a condição n < 3 não
        é mais verdadeira, então o laço termina.
        

-------------------------------------------------------------------------*/

const prompt = require("prompt-sync")(); // permite usar o prompt


// // let listaFrutas = ["Banana", "Maçã", "Pera", "Banana"];

// // let posicao = listaFrutas.indexOf("Banana", 1);

// // console.log(posicao);


// // let string = "alexandre";

// // let posicao = string.indexOf("a", 5);

// // console.log(posicao);


// // while = enquanto
// // for   = para

// // var i = 0;

// // while (i < 10)
// // {
// //   console.log(i);
// //   i++;
// // }

// let entradaEmail = "";
// let entradaSenha = "";


// // EMAIL && SENHA
// // TRUE  && TRUE  => TRUE
// // TRUE  && FALSE => FALSE
// // FALSE && TRUE  => FALSE
// // FALSE && FALSE => FALSE

// // JOGO BRASIL || SOL NO DOMINGO  => CHURRASCO

// // TRUE        || TRUE            => TRUE
// // TRUE        || FALSE           => TRUE
// // FALSE       || TRUE            => TRUE
// // FALSE       || FALSE           => FALSE

// // entradaEmail != "admin@blue.com"
// // "admin"      != "admin@blue.com"
// // TRUE

// // entradaSenha != "123"
// // "123"        != "123"
// // FALSE

// // TRUE && FALSE => FALSE

// // TRUE || FALSE  => TRUE


while (entradaEmail != "admin@blue.com" || entradaSenha != "123")
{
  entradaEmail = prompt("Digite o e-mail: ");
  entradaSenha = prompt("Digite o senha: ");
}

while (entradaEmail == "admin@blue.com" && entradaSenha == "123")
{
  entradaEmail = prompt("Digite o e-mail: ");
  entradaSenha = prompt("Digite o senha: ");
}

console.log("Você entrou na conta!");


// // let jogarNovamente = "";

// // while (jogarNovamente != "não")
// // {
// //   jogarNovamente = prompt("Vc deseja jogar novamente? ");
// //   console.log(jogarNovamente);
// // }


// var i = 0;

// // do
// // {
// //   console.log(i);
// //   i++;
// // } while (false)

// // while (false)
// // {
// //   console.log(i);
// //   i++;
// // }

// // let resultado = ' ';
// // var i = 0;
// // do 
// // {
// //   i += 1;
// //   resultado += i + ' ';
// //   console.log(resultado);
// // }while (i < 5);

// // console.log();
// // i = 0;
// // resultado = ' ';

// // while (i < 5) 
// // {
// //   i += 1;
// //   resultado += i + ' ';
// //   console.log(resultado);
// // }

// // var count = 0;
// // while (true)
// // {
// //   count++; // count = 2
// //   console.log(count);

// //   if(count == 2)
// //   {
// //     break;
// //   }
// // }


// let pergunta = "";

// // while(true)
// // {
// //   pergunta = prompt("Você deseja sair do aplicativo? ");
// //   console.log(pergunta);

// //   if (pergunta === "sim")
// //   {
// //     break;
// //   }
// // }

// pergunta = "sim";
// // while (pergunta === "sim")
// // {
// //   pergunta = prompt("Você deseja jogar novamente? ");
// //   console.log(pergunta);
// // }

// for (; pergunta === "sim";)
// {
//   pergunta = prompt("Você deseja jogar novamente? ");
//   console.log(pergunta);
// }



// console.log("FIM");



// // 20, 1000, 1, 3

// // 1 3 20 1000