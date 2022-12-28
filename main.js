///////////NAVBAR
const header = document.querySelector('header');

window.addEventListener('scroll', stickyNavbar);

function stickyNavbar() {
    header.classList.toggle('scrolled', window.scrollY > 0);
}

