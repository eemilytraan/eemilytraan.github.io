// add the click effect for animation for button
const menu = document.querySelector('#mobile-menu'); // id of button
const menuLinks = document.querySelector('.navbar__menu');

// target ul to trigger on click
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

