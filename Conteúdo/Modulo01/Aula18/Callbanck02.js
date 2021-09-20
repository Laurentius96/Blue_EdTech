// ---------------------------------- Aula 18 -----------------------------\\

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
    
            `); // templade literals

    // Posso atribuir quantos parâmetros eu precisar na minha callback.
    // Na prática isso ocorre de forma dinâmica.
    // Para casa parâmetro passado na callback, o mesmo também precisa ser passado na function.
    callback("OK", 1, "Ss", "Lorenzo");
  }, 4000); //4000ms correspondem a 4s de espera.
}

console.log("Início do envio do email!");

enviarEmail(
  "Parabêns Lorenzo!! Você foi aprovado no nosso programa Trainee!!",
  "bianchi92@hotmail.com",
  "Resultado processo seletivo.",
  function (status, amount, time, name) {
    console.log(`
    De: ${name}
    --------------------------------------
    Status: ${status}
    --------------------------------------
    Contatos: ${amount}
    --------------------------------------
    Tempo de espera: ${time}
    `);
  }
);
// nesse caso o callback só seá executado após termos certeza que o email foi enviado e que está tudo ok.
