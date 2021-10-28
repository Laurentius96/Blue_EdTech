/*
window.onload = function() {
    alert("Olá mundo do JavaScript para Web");
};
*/
const btnTexto = document.querySelector("#btn-texto"); // Captura o botão no DOM pelo id (usado o #)

btnTexto.addEventListener("click", function () {
  // Adiciona um evento de click no botão capturado e assim que for clicado, executa a função.
  const tagH1 = document.createElement("h1"); // Cria uma tag h1 e adiciona a let tagH1
  const h1Text = document.createTextNode("Texto criado no JS"); // Cria um texto e adiciona a let h1Text

  tagH1.appendChild(h1Text); // Adiciona a tag H1 o texto criado acima

  document.body.appendChild(tagH1); // Adiciona ao body a h1 criada, com seu texto.
});
