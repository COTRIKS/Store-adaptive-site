// Работа со слайдером
$(document).ready(() => $('.slider').slick({
  slidesToShow: 3,
  speed: 1000,
  infinite: false,
  touchThreshold: 7,
  responsive:[
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
      }
    }
  ]
}))

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

// Работа с выбором
const inputMen = document.querySelector('#formMen')
const blockMen = document.querySelector('.products__men')

const inputWomen = document.querySelector('#formWomen')
const blockWomen = document.querySelector('.products__women')

const inputChildren = document.querySelector('#formChildren')
const blockChildren = document.querySelector('.products__children')

const inputAll = document.querySelector('.change__btn')

inputMen.addEventListener('click', () => {
  blockMen.style.display = 'block'
  blockWomen.style.display = 'none'
  blockChildren.style.display = 'none'
})

inputWomen.addEventListener('click', () => {
  blockMen.style.display = 'none'
  blockWomen.style.display = 'block'
  blockChildren.style.display = 'none'
})

inputChildren.addEventListener('click', () => {
  blockMen.style.display = 'none'
  blockWomen.style.display = 'none'
  blockChildren.style.display = 'block'
})

inputAll.addEventListener('click', (e) => {
  e.preventDefault()

  const inputs = [inputMen, inputWomen, inputChildren]

  for(const input of inputs) {
    if(input.checked === true) {
      input.checked = false
    }
  }

  blockMen.style.display = 'block'
  blockWomen.style.display = 'block'
  blockChildren.style.display = 'block'
})