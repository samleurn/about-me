var projects = "Meus Projetos";
var projectsElement = document.querySelector(".portifolio__conteudo__titulo__projects");
var atraso = 200;

var contadorDeLetras = 0;

function myProject() {
    if (contadorDeLetras < projects.length) {
        projectsElement.textContent += projects.charAt(contadorDeLetras);
        contadorDeLetras++;
        setTimeout(myProject, atraso);
    }
}

myProject()