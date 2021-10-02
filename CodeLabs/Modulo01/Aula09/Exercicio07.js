//-------------------- CodeLab (Aula 09) - Exercícios 07 -------------------- \\

/* 
07 - Criar uma função que receba como parâmetro um array de números e retorne um array contendo somente números positivos.
*/

function numeroPositivo() {
  let lista = [1, 12, 3, 41, -1, -3, -8];
  let novaLista = [];

  for (let i of lista) {
    if (i >= 0) {
      novaLista.push(i);
    }
  }
  console.log(novaLista);
}

numeroPositivo();
