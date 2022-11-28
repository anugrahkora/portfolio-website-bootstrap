import * as bootstrap from 'bootstrap';




const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})








// const mediaQuery = window.matchMedia('(min-width: 768px)')

// if (mediaQuery.matches) {

//     alert('Media Query Matched!')
// }