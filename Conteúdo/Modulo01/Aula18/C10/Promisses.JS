/* ------------------------------ Promisses ------------------------------  



-------------------------------------------------------------------------*/

// -------------------------- SetTimeout:
setTimeout(() => console.log("Hello, world!"), 5000);
console.log("Vou ao mercado!");

// --------------------------

// function soma() {
//   let resultado = 1 + 3;

//   if (resultado == 2) {
//     msgSucesso();
//   } else {
//     msgError();
//   }
// }

// function msgSucesso() {
//   console.log("Sucesso! Resultado é 2");
// }

// function msgError() {
//   console.log("Ops... erro!");
// }

// soma();

// --------------------------

function soma() {
  let promise = new Promisse((resolve, reject) => {
    let resultado = 1 + 1;

    if (resultado == 1 + 1) {
      resolve("Sucesso! Resultado é 2");
    } else {
      reject("Ops... Erro");
    }
  });

  promise
    .them((mensagem) => {
      console.log("Isso é o then" + mensagem);
    })
    .catch((erro) => {
      console.log("Issto é o catch:" + erro);
    });
}
