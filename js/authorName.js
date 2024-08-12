var name = "Samuel Ramos";
var nameElement = document.querySelector(".portifolio__conteudo__titulo");
var atraso = 200;

var contadorDeLetras = 0;

function authorName() {
    if (contadorDeLetras < name.length) {
        nameElement.textContent += name.charAt(contadorDeLetras);
        contadorDeLetras++;
        setTimeout(authorName, atraso);
    }
}

authorName()