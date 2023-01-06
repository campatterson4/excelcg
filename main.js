/////////// NAVBAR
const header = document.querySelector('header');

window.addEventListener('scroll', fixedNav);

function fixedNav() {
    header.classList.toggle('scrolled', window.scrollY > 0);
}

/////////// SCROLL REVEAL MAIN

let sr = ScrollReveal({
    duration: 2500,
    distance: "50px",
});

sr.reveal(".main-info", {origin: "bottom"});
sr.reveal(".main-services", {origin: "top"});