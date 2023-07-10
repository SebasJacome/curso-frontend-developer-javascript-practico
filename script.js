const menuEmail = document.querySelector('.navbar-email');
const destkopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleProfileMenu);

function toggleProfileMenu(){
    destkopMenu.classList.toggle('inactive');
}