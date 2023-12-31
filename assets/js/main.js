/*Smooth Scrolling on Clicking Internal Link*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
       e.preventDefault();

       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });
   });
});

/*Toggling Menu*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const hireMeButton = document.getElementById('hire-me-button');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

if (hireMeButton) {
    hireMeButton.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

navLinks.forEach((navLink) => {
   navLink.addEventListener('click', () => {
       navMenu.classList.remove('show-menu');
   });
});