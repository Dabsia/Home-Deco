var menu = document.getElementById('menu');
var ul = document.querySelector('ul');
var logo = document.querySelector('.logo')
var image__container = document.querySelector('.image__container')
function showNav() {
    ul.classList.toggle('open')
    
    document.body.style.overflow = 'hidden'
}
menu.addEventListener('click', showNav) 
