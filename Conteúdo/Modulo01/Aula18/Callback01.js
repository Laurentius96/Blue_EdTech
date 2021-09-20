// ---------------------------------- Aula 18 -----------------------------\\


// // O nosso callback deve ser passado como um parâmetro da função enviarEmail

function enviarEmail(corpo, para, assunto, callback) {
  setTimeout(function () {
    console.log(`
          Para:${para}
          ------------------------------------------------------
          Assunto:${assunto}
          ------------------------------------------------------
          ${corpo}
          ------------------------------------------------------
          De Empresa dos Sonhos!
  
          `);
    callback(); // templade literals
  }, 4000); //4000ms correspondem a 4s de espera.
}

console.log("Início do envio do email!");

enviarEmail(
  "Parabêns Lorenzo!! Você foi aprovado no nosso programa Trainee!!",
  "bianchi92@hotmail.com",
  "Resultado processo seletivo.",
  function () {
    console.log("Seu email foi enviado!");
  }
);
// nesse caso o callback só seá executado após termos certeza que o email foi enviado e que está tudo ok.
