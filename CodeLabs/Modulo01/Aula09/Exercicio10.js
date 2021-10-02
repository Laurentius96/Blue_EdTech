//-------------------- CodeLab (Aula 09) - Exercícios 10 -------------- \\

/* 
10 - Retornar a maior string de um array.
*/

var listaStr = ["Olá", "Casa", "Poder", "Anarquia"];

function maiorStr(lista) {
  let maior = "";

  for (let i = 0; i <= lista.length; i++) {
    
    if (lista[i].length > maior.length) {
      maior = lista[i];
    }
  }
  return maior;
}

maiorStr(listaStr);
