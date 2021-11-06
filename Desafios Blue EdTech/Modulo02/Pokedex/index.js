const express = require("express"); // -----------------------> Importa o módulo express para esse arquivo...
const path = require("path"); // -----------------------------> Permite add estilos CSS e outros arquivos (lib do próprio Express chamada path)...

const app = express(); //-------------------------------------> Instancia uma referência do express no projeto...
const port = process.env.PORT || 3000; //-----------------------------------------> Const para armanezar a porta do servidor...

app.set("view engine", "ejs"); //-----------------------------> Permite que o servidor Express renderize qualquer página EJS...
app.use(express.static(path.join(__dirname, "public"))); // ---> Diz para o Express a pasta que irá guardar esses arquivos...

app.use(express.urlencoded({ extended: true })); // ----------------------------> Para configurar o recebimento de JSON em seu servidor, permite o uso de dados na web...
let message = ""; // -----------------------------------------> Declaração da variável message...

// =============================== Criando um lista de pokemon para deixar o site mais bonito... ===============================\\

const pokedex = [
  {
    number: "001",
    name: "Bulbasaur",
    type: "Grass, Poison",
    photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    height: "0.7m",
    weight: "6.9Kg",
    category: "Seed",
    skill: "Overgrow",
  },
  {
    number: "002",
    name: "Ivysaur",
    type: "Grass, Poison ",
    photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
    description:
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    height: "1.0m",
    weight: "13.0Kg",
    category: "Seed",
    skill: "Overgrow",
  },
  {
    number: "003",
    name: "Venusaur",
    type: "Grass, Poison",
    photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
    description:
      "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    height: "2.0m",
    weight: "100.0Kg",
    category: "Seed",
    skill: "Overgrow",
  },
];

//================================================ Iniciando às rotas ================================================\\

// Rota principal que recebe uma função de callback que recebe dois parametros:
// req de requisição...
// res de resposta...

app.get("/", function (req, res) {
  setTimeout(() => {
    message = "";
  }, 1000);
  res.render("index.ejs", { pokedex: pokedex, message });
});

app.get("/cadastro", function (req, res) {
  res.render("cadastro.ejs"); // Nome do arquivo, o EJS já busca dentro da pasta views...
});

app.post("/receiveinfo", function (req, res) {
  const {
    poke_number,
    poke_name,
    poke_type,
    poke_photo,
    poke_description,
    poke_height,
    poke_weight,
    poke_category,
    poke_skill,
  } = req.body;
  pokedex.push({
    number: poke_number,
    name: poke_name,
    type: poke_type,
    photo: poke_photo,
    description: poke_description,
    height: poke_height,
    weight: poke_weight,
    category: poke_category,
    skill: poke_skill,
  });
  message = "Pokémon cadastrado com sucesso!";
  res.redirect("/");
});

app.get("/detalhes/:id", function (req, res) {
  const id = req.params.id;
  const poked = pokedex[id];
  res.render("detalhes", { poked });
});

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando...
// Liga o servidor na porta 3000...
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
