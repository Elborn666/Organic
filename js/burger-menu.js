const openBurgerBtn = document.querySelector('.js-burger-open')
const closedBurgerBtn = document.querySelector('.js-burger-close')
const menuBurger = document.querySelector('.js-burger-menu')
const body = document.querySelector('body')
const eventsClose = document.querySelectorAll('.js-burger-link')

openBurgerBtn.addEventListener('click', onOpenBurger)
closedBurgerBtn.addEventListener('click', onClosedBurger)

function onOpenBurger (){
    menuBurger.classList.add('active__burger')
    body.classList.add('hidden')
    closedBurgerBtn.classList.add('active__burger')
}

function onClosedBurger (){
    menuBurger.classList.remove('active__burger')
    body.classList.remove('hidden')
    closedBurgerBtn.classList.remove('active__burger')
}


for (let eventClose of eventsClose) {
    eventClose.addEventListener('click', onCloseModalBurger);
  }
function onCloseModalBurger (){
    menuBurger.classList.remove('active__burger')
    body.classList.remove('hidden')
    closedBurgerBtn.classList.remove('active__burger')
}