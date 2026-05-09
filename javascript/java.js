/* =============================== */
/* TELECOM NETWORK PERU - JS PRO */
/* =============================== */

/* MENU RESPONSIVE */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

/* CERRAR MENU AL DAR CLICK */

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

/* HEADER EFECTO SCROLL */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(7,17,31,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "#07111f";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
    }

});

/* ANIMACIÓN AL HACER SCROLL (APARICIÓN) */

const elements = document.querySelectorAll(
    ".about, .services, .projects, .contact"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

elements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);

});

/* BOTONES EFECTO CLICK */

document.querySelectorAll(".btn-primary, .btn-secondary").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.transform = "scale(0.95)";

        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);

    });

});

/* EFECTO HOVER SUAVE EN CARDS */

document.querySelectorAll(".service-card, .project-card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transition = "0.4s ease";
    });

});

/* FORMULARIO */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Mensaje enviado correctamente ✔");

    form.reset();

});
/* EFECTO TYPING (OPCIONAL EN TITULO HERO) */
const title = document.querySelector(".hero-content h2");

if (title) {

    const text = title.textContent;
    title.textContent = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            title.textContent += text.charAt(i);
            i++;

            setTimeout(typing, 40);
        }
    }

    typing();
}
