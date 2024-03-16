const mobileMenu = document.querySelector('.mobile-menu')
const navList = document.querySelector('nav')
const navLinks = document.querySelectorAll('.nav-link')

function animateLinks() {
    navLinks.forEach((links, index) => {
    links.style.animation
        ? (links.style.animation = "")
        : (links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
});
}

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active')
    mobileMenu.classList.toggle('active')
    animateLinks()
})