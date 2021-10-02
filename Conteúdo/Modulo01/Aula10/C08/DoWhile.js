//-------------------------------------- Exemplo 01 ------------------------------------------------------------------*/
// // -------------------------- While Loop

let resultado = "";
let g = 0;

while (g < 8) {
  g += 1; // g = g+1
  resultado += g; // resultado = resultado + g
  console.log(resultado);
}

// // --------------------------- Do While - Exemplo 01

let resultado2 = "";
let i = 0;

// Ações do meu programa...
do {
  i = i + 1; // i ++
  resultado2 = resultado2 + i;
} while (i < 5);
console.log("Resultado do Do While:" + resultado2);

// // ---------------------------- While - Exemplo 02

let resultado3 = "";
let x = 0;

while (x < 5) {
  resultado3 = resultado3 + x;
  x = x + 1; // i++
}
console.log("Resultado do While:" + resultado3);
