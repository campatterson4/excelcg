const header = document.querySelector('.nav-container');

window.addEventListener('scroll', stickyNavbar);

function stickyNavbar() {
    header.classList.toggle('scrolled');
}

