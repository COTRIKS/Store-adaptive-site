// Прелоадер
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader')
  const pageBody = document.querySelector('body')

  preloader.classList.add('complete')
  pageBody.classList.add('scrollY')
})

// Работа с меню
window.addEventListener('scroll', () => {
  const menu = document.querySelector('.header__menu')
  menu.classList.toggle('scrollMenu', window.scrollY > 0)
})

// Бургер меню
const menuBtn = document.querySelector('.burger1')
const menuList = document.querySelector('.burger2')
const menu2 = document.querySelector('.scrollMenu')
let menuOpen = false

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('close')
    menuOpen = true
    menuList.style.transform = 'translateX(0)'
  } else {
    menuBtn.classList.remove('close')
    menuOpen = false
    menuList.style.transform = 'translateX(100%)'
  }
})

// Телефон
const tel = document.querySelector('.number')
const showBtn = document.querySelector('.shower')

showBtn.addEventListener('click', (e) => {
  e.preventDefault()

  tel.textContent = '966978181'

  showBtn.classList.add('afterShow')
})