// ================================
// MARCMAN TECH - MAIN SCRIPT
// ================================


// Mobile menu

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const navLinks = navbar.querySelectorAll("a");


// Open / close menu
menuToggle.addEventListener("click", () => {

    const isOpen = navbar.classList.toggle("active");

    menuToggle.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );
});


// Close menu when a navigation link is clicked
navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });

});