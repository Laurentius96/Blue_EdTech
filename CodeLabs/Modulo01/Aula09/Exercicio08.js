//-------------------- CodeLab (Aula 09) - Exercícios 08 -------------- \\

/* 
08 - Localizar o maior valor dentro de um array de números.
*/

function maior() {
    let lista = [1, 122, 3, 41, -1, -3, -8];
    let maiorNumero = 0;
    

    for (let i of lista) {
      if (i >= maiorNumero) {
        maiorNumero = i;
      }
    }
    console.log(maiorNumero);
  }
  
  maior();