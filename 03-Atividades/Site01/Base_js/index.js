const text = document.getElementById("text");
const titulo = document.querySelector("#titulo h1");
const subtitulo = document.getElementById("subtitulo");
const rodape = document.getElementById("rodape");



const textInput = document.getElementById("text-input");

function insertText() {
   text.textContent = textInput.value;
   textInput.value = "";
   titulo.textContent="Apague agora"; 
}

function removeText() {
    text.textContent = "";
    textInput.value = "";
    titulo.textContent="Aula03";
    subtitulo.textContent="Nao fique triste";
    rodape.textContent="Voce pode tentar de novamente depois";
}
//para o audio
const player = document.getElementById("player");
//inicia
function playAudio() {
  player.play();
}
//reseta o audio
function resetAudio() {
  player.currentTime = 0;  // volta para o início
}
//aumenta o audio
function volumeUp() {
  if (player.volume < 1) player.volume += 0.1;
}
//abaixa o audio
function volumeDown() {
  if (player.volume > 0) player.volume -= 0.1;
}
