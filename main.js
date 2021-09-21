var menu = document.getElementById('menu');
var ul = document.querySelector('ul');
var logo = document.querySelector('.logo')
var image__container = document.querySelector('.image__container')
function showNav() {
    ul.classList.toggle('open')
}
menu.addEventListener('click', showNav) 
