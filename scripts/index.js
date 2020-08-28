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

const sliderItems = Array.from(document.querySelector('.slider-inner').children)
const arrows = document.querySelectorAll('.slider-controls .arrow')
let activeSliderItem = sliderItems.filter(item => item.classList.contains('active'))[0]
let nextItem

function handleSliderControls(e) {
  if(e.target.tagName !== 'BUTTON') return
  e.preventDefault()

  if(e.target.dataset.move == 'left') {
    moveSliderToLeft()
  } else if(e.target.dataset.move == 'right') {
    moveSliderToRight()
  }

  activeSliderItem = nextItem
  handleDisablingArrows()
}

function moveSliderToLeft() {
  nextItem = activeSliderItem.previousElementSibling

  activeSliderItem.classList.remove('active')
  nextItem.classList.remove('left')
  nextItem.classList.add('active')
}

function moveSliderToRight() {
  nextItem = activeSliderItem.nextElementSibling
    
  activeSliderItem.classList.remove('active')
  activeSliderItem.classList.add('left')
  nextItem.classList.add('active')
}

function handleDisablingArrows() {
  if(activeSliderItem.nextElementSibling == null) {
    arrows.item(1).disabled = true
  } else {
    arrows.item(1).disabled = false
  }

  if(activeSliderItem.previousElementSibling == null) {
    arrows.item(0).disabled = true
  } else {
    arrows.item(0).disabled = false
  }
}

document.querySelector('.slider-controls').addEventListener('click', handleSliderControls)

handleDisablingArrows()