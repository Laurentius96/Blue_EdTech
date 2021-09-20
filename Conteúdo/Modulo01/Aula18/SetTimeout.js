// ---------------------------------- Aula 18 -----------------------------\\


/*
Programas Sincronos -> Programa que fizemos até a Aula 17, sou seja, são executados e trazem um resultado "na hora."

Programa Assicronos -> As coisas não acontecem no mesmo momento.
*/

// // Exemplo E-mail:

// // 1°) Precisamos criar uma função responsável pela simulação do envio do email.com.
// // 2°) Precisamos passar uma Função Anônima do setTimeout

function enviarEmail(corpo, para, assunto) {
  setTimeout(function () {
    console.log(`
        Para:${para}
        ------------------------------------------------------
        Assunto:${assunto}
        ------------------------------------------------------
        ${corpo}
        ------------------------------------------------------
        De Empresa dos Sonhos!

        `); // templade literals
  }, 4000); //4000ms correspondem a 4s de espera.
}

console.log("Início do envio do email!");

enviarEmail(
  "Parabêns Lorenzo!! Você foi aprovado no nosso programa Trainee!!",
  "bianchi92@hotmail.com",
  "Resultado processo seletivo."
);

console.log("Seu email foi enviado!");
