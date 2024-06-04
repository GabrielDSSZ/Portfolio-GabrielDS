let gbrMenu = document.getElementById('gbr-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

gbrMenu.addEventListener('click',() =>{
    menu.classList.add('abrir-menu')

})

menu.addEventListener('click',() =>{
    menu.classList.remove('abrir-menu')

})

overlay.addEventListener('click',() =>{
    menu.classList.remove('abrir-menu')

})










