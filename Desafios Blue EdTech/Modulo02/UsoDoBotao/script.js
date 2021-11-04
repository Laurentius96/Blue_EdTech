const botao = document.querySelector("#btn-texto"); // Captura o botão no DOM pelo id (usado o #)
var clique = 1;

botao.addEventListener("click", function () {
  // Adiciona um evento de click no botão capturado e assim que for clicado, executa a função.
  clique++;

  if (clique == 1) {
    document.getElementById("forma").src = "1f.jpg";
    document.getElementById("nomeForma").innerText =
      "Primeira Forma: Corte d’ Água Superficial – Ichi no kata: Minamo giri";
    document.getElementById("resumoForma").innerText =
      "Consiste em que o espadachim impulsiona sua espada para frente realizando um poderoso corte lateral.";
  } else if (clique == 2) {
    document.getElementById("forma").src = "2f.jpg";
    document.getElementById("nomeForma").innerText =
      "Segundo Forma: Roda d’ Água – Ni no kata: Mizu guruma";
    document.getElementById("resumoForma").innerText =
      "Consiste em que o ususário salta e gira verticalmente no ar com a sua espada liberando um ataque em movimento circular.";
  } else if (clique == 3) {
    document.getElementById("forma").src = "3f.jpg";
    document.getElementById("nomeForma").innerText =
      "Terceira Forma: Dança dos Movimentos Rápidos Padronizados – San no kata: Ryūryū mai";
    document.getElementById("resumoForma").innerText =
      "Consiste em que o ususário se mova rapidamente balançando a sua espada de maneira a imitar o movimento das ondas do oceano.";
  } else if (clique == 4) {
    document.getElementById("forma").src = "4f.jpg";
    document.getElementById("nomeForma").innerText =
      "Quarta Forma: Maré Impactante – Shi no kata: Uchishio";
    document.getElementById("resumoForma").innerText =
      "Consiste em uma sequência de golpes consecutivos movendo o corpo de forma fluida semelhante a uma maré.";
  } else if (clique == 5) {
    document.getElementById("forma").src = "5f.jpg";
    document.getElementById("nomeForma").innerText =
      "Quinta Forma: Chuva Milagrosa em Dia Seco – Go no kata: Kanten no jiu";
    document.getElementById("resumoForma").innerText =
      "A Quinta Forma é um golpe rápido e sutil que tem como objetivo matar o alvo com pouca ou nenhuma dor.";
  } else if (clique == 6) {
    document.getElementById("forma").src = "6f.jpg";
    document.getElementById("nomeForma").innerText =
      "Sexta Forma: Redemoinho Giratório – Roku no kata: Nejire uzu";
    document.getElementById("resumoForma").innerText =
      "O espadachim precisa contorcer rapidamente a parte inferior e superior do seu corpo com o objetivo de criar um redemoinho que corta tudo que está próximo.";
  } else if (clique == 7) {
    document.getElementById("forma").src = "7f.jpg";
    document.getElementById("nomeForma").innerText =
      "Sétima Forma: Ataque Curvo Perfurador de Ondas – Shichi no kata: Shizuku wa Mondzuki";
    document.getElementById("resumoForma").innerText =
      "Consiste em um ataque rápido e preciso realizando através de um estocada com a espada. Essa também a mais rápida Forma da Respiração da Água.";
  } else if (clique == 8) {
    document.getElementById("forma").src = "8f.jpg";
    document.getElementById("nomeForma").innerText =
      "Oitava Forma: Jarro de Cachoeira – Hachi no kata: Takitsubo";
    document.getElementById("resumoForma").innerText =
      "Tendo a potência de uma cachoeira, a Oitava Forma seria o equivalente a Primeira Forma, só que realizada com um potente corte vertical em um único golpe.";
  } else if (clique == 9) {
    document.getElementById("forma").src = "9f.jpg";
    document.getElementById("nomeForma").innerText =
      "Nova Forma: Respingo de Água do Caos – Ku no kata: Suiryū shibuki";
    document.getElementById("resumoForma").innerText =
      "Simulando a ideia de que o espadachim está pisando brevemente na superfície da água, a Nova Forma é composta por movimentos rápidos e praticamente sem limites, em que o usuário luta sem a necessidade de fixar os pés em uma superfície.";
  } else if (clique == 10) {
    document.getElementById("forma").src = "10f.jpg";
    document.getElementById("nomeForma").innerText =
      "Décima Forma: Dragão da Mudança (ou Fluxo Constante) – Jū no kata: Seisei ruten";
    document.getElementById("resumoForma").innerText =
      "É uma sequência de ataques contínuos que vão ficando cada vez mais fortes à medida que os cortes vão sendo realizados.";
  } else if (clique == 11) {
    document.getElementById("forma").src = "11f.jpg";
    document.getElementById("nomeForma").innerText =
      "Décima Primeira Forma: Calmaria – Jū Ichi no kata: Nagi";
    document.getElementById("resumoForma").innerText =
      "Interrompendo todos os movimentos do seu corpo, o espadachim entra em estado de defesa completa desviando e bloqueando qualquer ataque.";

    clique = 0;
  }
});
