/* 

1) Serão dois laços:

> O externo para controlar o limite de posição final a ser percorrido, pois em cada volta do laço o mair vai pro final e já fica ordenado

> O interno, fará as comparações dos elementos em pares

    Se o primero de cada par par for maior que o segundo, acontece a troca dos elementos. 


*/

//------------------------------ Código ------------------------------//

function bubbleSort(items) {
  for (let i = 0; i < items.length - 1; i++) {
    for (let j = 0; j < items.length - 1; j++) {
      if (items[j] > items[j + 1]) {
        [items[j], items[j + 1]] = [items[j + 1], items[j]];
      }
    }
    console.log(items);
  }
  return items;
}

bubbleSort([10, 2, 4, 1, 6, 8, 5, 7, 3, 9]);

// //

