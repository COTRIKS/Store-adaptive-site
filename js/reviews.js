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

// Всплывающее окно
const reviewOpenBtn = document.querySelector('.review__btn')
const reviewCloseBtn = document.querySelector('.popup__close')
const popup = document.querySelector('.popup')
const popupWindow = document.querySelector('.popup__window')

reviewOpenBtn.addEventListener('click', (e) => {
  e.preventDefault()
  popup.style.display = 'flex'
})

reviewCloseBtn.addEventListener('click', () => {
  popup.style.display = 'none'
})

// Анимация при наведении для второго кружочка
const firstReview = document.querySelector('.review__first')
const secondReview = document.querySelector('.review__second')
const thirdReview = document.querySelector('.review__third')
const fourthReview = document.querySelector('.review__fourth')

const reviews = [firstReview, secondReview, thirdReview, fourthReview]

for(const review of reviews) {
  const lastElem = review.lastElementChild
  const afterCircle = lastElem.previousElementSibling
  lastElem.addEventListener('mouseover', () => {
    afterCircle.classList.add('afterCircle')
  })
  lastElem.addEventListener('mouseout', () => {
    afterCircle.classList.remove('afterCircle')
  })
}