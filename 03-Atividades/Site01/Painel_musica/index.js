const text = document.getElementById("text");
const titulo = document.getElementById("titulo");
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