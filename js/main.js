const menuBottom = document.querySelector('.menu__buttom');
const menuMobile = document.querySelector('.cabecalho__menu');
let isMenuOpen = false;

menuBottom.addEventListener('click', function () {
    isMenuOpen ? menuMobile.classList.add('invisible') : menuMobile.classList.remove('invisible');
    isMenuOpen = !isMenuOpen;
    isMenuOpen ? menuBottom.children[0].setAttribute('src', './assests/icons/close_icon.png') : menuBottom.children[0].setAttribute('src', './assests/icons/menu_icon.png')
    
})

