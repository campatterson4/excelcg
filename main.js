///////////NAVBAR
const header = document.querySelector('header');

function fixedNav() {
    header.classList.toggle('scrolled', window.scrollY > 0);
}

window.addEventListener('scroll', fixedNav);

