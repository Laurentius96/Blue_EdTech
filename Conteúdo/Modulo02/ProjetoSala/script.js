const btnTexto = document.querySelector("#btn-texto");
const frases = ["frase1", "frase2", "frase3", "frase4"];

btnTexto.addEventListener("click", function () {
  let i = Math.floor(Math.random() * 4);
  alert(frases[i]);
});

