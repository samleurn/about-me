var skills = "Minhas Habilidades";
var skillsElement = document.querySelector(".portifolio__conteudo__titulo__skills");
var atraso = 200;

var contadorDeLetras = 0;

function mySkills() {
    if (contadorDeLetras < skills.length) {
        skillsElement.textContent += skills.charAt(contadorDeLetras);
        contadorDeLetras++;
        setTimeout(mySkills, atraso);
    }
}

mySkills()