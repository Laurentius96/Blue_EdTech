/* ---------------------- Estruturas de repetição - arrow function ----------------------  

    Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma 
    expressão de função (function expression) e não tem seu próprio this, arguments, 
    super ou new.target. Estas expressões de funções são melhor aplicadas para funções 
    que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).


----------------------------------------------------------------------------------------*/


// ----------------------------------------------------------- Ex. 01

function olaMundo(){ 
    return "Olá mundo!";
}

let olamundo = () =>{return "Olá Mundo"};

let olaMundo = () => "Olá Mundo!";


// não se usa o THIS. quando usar a arrow function