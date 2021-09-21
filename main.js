 menu = document.querySelector('.menu');
 ul = document.querySelector('ul')
menu.addEventListener('click', showNav)

function showNav() {
    if (menu.style.display == 'none'){
        ul.classList.add('block__items')
    }
    console.log('sdf')
    
}
