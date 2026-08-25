const text = document.getElementById("text");
const textInput = document.getElementById("text-input");

function insertText() {
   text.textContent = textInput.value;
   textInput.value = "";
}

function removeText() {
    text.textContent = "";
    textInput.value = "";
}