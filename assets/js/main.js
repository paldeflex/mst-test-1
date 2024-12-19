document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('navbar--open');
        hamburger.classList.toggle('hamburger--active');
    });

    document.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('.play-now-btn').forEach((button) => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#form-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});