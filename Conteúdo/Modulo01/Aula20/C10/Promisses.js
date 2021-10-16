/* ------------------------------ Promisses ------------------------------  



-------------------------------------------------------------------------*/

// -------------------------- SetTimeout:

function enviarEmail(corpo, destinatario) {
  setTimeout(function () {
    console.log(`E-mail com o corpo ${corpo} foi enviado ao ${destinatario}`);
    console.log();
  }, 2000); // 2000 ms = 2 seconds
}

console.log();
enviarEmail("Bom dia!", "lorenzo@blue.ed.br");
console.log();

console.log("Outra tarefa");
console.log();

function verificarEmail() {
  console.log(`E-mail verificado com sucesso!`);
  console.log;
}
