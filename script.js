const menuEmail = document.querySelector('.navbar-email');
const destkopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu');

menuEmail.addEventListener('click', toggleDestkopProfileMenu);
menuIcon.addEventListener('click', toggleMobileMenu);

function toggleDestkopProfileMenu(){
    destkopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}