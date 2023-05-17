const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao")

var button = document.getElementById("pokemon");
var audio = new Audio("./src/musica/pokemonmusic.mp3");
var isPlaying = false;

botaoAlterarTema.addEventListener("click", () =>{

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro");

    
    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/moon.png");

    }

});

button.addEventListener("click", function () {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
});
