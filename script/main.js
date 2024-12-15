const navbar = document.querySelector('.navbar');
const menu = document.getElementById('menu');


// Navbar
menu.addEventListener("click", (event) => {
    navbar.classList.toggle('active');
    event.preventDefault();
});

document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !navbar.contains(event.target)) {
        navbar.classList.remove('active');
    }
});


// Animasi Type JS
var typed = new Typed(".text",{
    strings:["Terjangkau","Terpercaya","Cepat", "Aman"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});


// Animasi ScrollReveal

ScrollReveal().reveal(".header", {
    distance: "50px",
    origin: "bottom",
    duration: 1500,
    reset: false,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
})

ScrollReveal().reveal(".booking .card #pertama",{
    distance: "50px",
    origin: "right",
    duration: 1500,
    reset: true,
});

ScrollReveal().reveal(".booking .card #kedua",{
    distance: "50px",
    origin: "left",
    duration: 1500,
    reset: true,
});

ScrollReveal().reveal(".home .hero h1", {
    distance: "50px",
    origin: "right",
    duration: 2000,
    reset: true,
})

ScrollReveal().reveal(".home .hero h2", {
    distance: "50px",
    origin: "left",
    duration: 2000,
    reset: true,
})


ScrollReveal().reveal(".booking .lihat", {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    reset: true,
})

ScrollReveal().reveal(".services .main-services", {
    distance: "50px",
    origin: "left",
    duration: 1000,
    reset: true,
    mobile: false,
})

ScrollReveal().reveal(".services .services-img", {
    distance: "50px",
    origin: "right",
    duration: 1000,
    reset: true,
    mobile: false,
})

ScrollReveal().reveal(".footer .copy", {
    distance: "50px",
    origin: "right",
    duration: 1000,
    reset: true,
})

ScrollReveal().reveal(".footer .sosmed", {
    distance: "50px",
    origin: "left",
    duration: 1000,
    reset: true,
})


