const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.mobile-menu-wrap');
let isOpened = false;

mobileMenu.addEventListener('click', () => {
    if (isOpened) {
        menu.style.transform = 'translateY(-101%)';
        isOpened = false;
    }
    else {
        menu.style.transform = 'translateY(-1%)';
        isOpened = true;
    }
})