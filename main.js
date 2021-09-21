var menu = document.getElementById('menu');
var ul = document.querySelector('ul');
var logo = document.querySelector('.logo')

function showNav() {
    
    ul.classList.toggle('open')
    
    document.body.style.overflow = 'hidden'
}
menu.addEventListener('click', showNav) 
