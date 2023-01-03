///////////NAVBAR
const header = document.querySelector('header');

window.addEventListener('scroll', fixedNav);

function fixedNav() {
    header.classList.toggle('scrolled', window.scrollY > 0);
}