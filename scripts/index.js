const navbarCollapse = document.querySelector('.navbar-collapse')
const hamburger = document.querySelector('.hamburger')

function toggleMenu() {
  document.body.classList.toggle('no-scroll')
  hamburger.classList.toggle('active')
  navbarCollapse.classList.toggle('show')
}

function closeMenu(e) {
  if(!e.target.tagName == 'A') return

  navbarCollapse.classList.remove('show')
  hamburger.classList.remove('active')
  document.body.classList.remove('no-scroll')
}

hamburger.addEventListener('click', toggleMenu)
navbarCollapse.addEventListener('click', closeMenu)

const carouselItems = Array.from(document.querySelector('.carousel-inner').children)
const arrows = document.querySelectorAll('.carousel-controls .arrow')
let activeCarouselItem = carouselItems.filter(item => item.classList.contains('active'))[0]
let nextItem

function handleCarouselControls(e) {
  if(e.target.tagName !== 'BUTTON') return
  e.preventDefault()

  if(e.target.dataset.move == 'left') {
    moveCarouselToLeft()
  } else if(e.target.dataset.move == 'right') {
    moveCarouselToRight()
  }

  activeCarouselItem = nextItem
  handleDisablingArrows()
}

function moveCarouselToLeft() {
  nextItem = activeCarouselItem.previousElementSibling

  activeCarouselItem.classList.remove('active')
  nextItem.classList.remove('left')
  nextItem.classList.add('active')
}

function moveCarouselToRight() {
  nextItem = activeCarouselItem.nextElementSibling
    
  activeCarouselItem.classList.remove('active')
  activeCarouselItem.classList.add('left')
  nextItem.classList.add('active')
}

function handleDisablingArrows() {
  if(activeCarouselItem.nextElementSibling == null) {
    arrows.item(1).disabled = true
  } else {
    arrows.item(1).disabled = false
  }

  if(activeCarouselItem.previousElementSibling == null) {
    arrows.item(0).disabled = true
  } else {
    arrows.item(0).disabled = false
  }
}

document.querySelector('.carousel-controls').addEventListener('click', handleCarouselControls)

handleDisablingArrows()