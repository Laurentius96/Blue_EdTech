/* ------------------------------ Promisses ------------------------------  



-------------------------------------------------------------------------*/

// -------------------------- SetTimeout e Callback:

function enviarEmail(corpo, destinatario, callback) {
  setTimeout(function () {
    console.log(`E-mail com o corpo ${corpo} foi enviado ao ${destinatario}`);
    console.log();
    callback(); // Chama a função verifica enviar Email
  }, 2000); // 2000 ms = 2 seconds
}

console.log();
enviarEmail("Bom dia!", "lorenzo@blue.ed.br");
console.log();

console.log("Outra tarefa");
console.log();

function verificarEmail() {
  console.log(`E-mail verificado com sucesso!`);
  console.log();
}

verificarEmail();

// -------------------------- Como Arrow Function

var enviarEmail =(corpo)