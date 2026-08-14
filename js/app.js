const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );
    });
}