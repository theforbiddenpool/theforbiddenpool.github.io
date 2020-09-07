const navbarCollapse = document.querySelector('.navbar-collapse')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', toggleMenu)
navbarCollapse.addEventListener('click', closeMenu)

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

const carousel = document.querySelector('.projects-carousel')
const carouselItems = Array.from(carousel.querySelector('.carousel-inner').children)
const arrows = carousel.querySelectorAll('.carousel-controls .arrow')
let activeCarouselItem = carouselItems.filter(item => item.classList.contains('active'))[0]
let nextItem

carousel.querySelector('.carousel-controls').addEventListener('click', handleCarouselControls)

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

handleDisablingArrows()

/** DRAG ACTION CAROUSEL */
let startX
let mouseDown = false
let movedOneSlide = false

carousel.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].clientX
})
carousel.addEventListener('touchmove', handleDragMovement)
carousel.addEventListener('transitionend', () => {
  movedOneSlide = false
})

function handleDragMovement(e) {
  const clientX = e.clientX || e.changedTouches[0].clientX
  const moveRatio = (e.type == 'mousemove') ? 20 : 4

  if(e.type !== 'touchmove') {
    if(!mouseDown) return
  }

  if(Math.abs(startX - clientX) < (window.screen.width / moveRatio))
    return
  
  if(movedOneSlide)
    return

  if(startX > clientX) { // move to the right
    if(!activeCarouselItem.nextElementSibling) return
    
    moveCarouselToRight()
  } else { // move to the left
    if(!activeCarouselItem.previousElementSibling) return
    moveCarouselToLeft()
  }
  movedOneSlide = true
    
  activeCarouselItem = nextItem
  handleDisablingArrows()
}

carousel.addEventListener('mousedown', (e) => {
  mouseDown = true
  startX = e.clientX
})
carousel.addEventListener('mousemove', handleDragMovement)
carousel.addEventListener('mouseup', handleMouseUp)
carousel.addEventListener('mouseout', handleMouseUp)

function handleMouseUp() {
  mouseDown = false
}

const contactFormWrapper = document.querySelector('#contact .contact-form')
const contactForm = contactFormWrapper.querySelector('form')

contactForm.addEventListener('submit', handleFormSubmission)

function handleFormSubmission(e) {
  e.preventDefault()

  if(this.checkValidity()) {

  } else {
    handleInvalidInput()
  }

  contactForm.classList.add('was-validated')
}

function handleInvalidInput() {
  const invalidFields = []

  contactForm.querySelectorAll(':invalid').forEach(control => {
    for(const key in control.validity) {
      if(control.validity[key]) {
        invalidFields.push({ name: control.name, el: control, error: key })
      }
    }
  })

  invalidFields.forEach(control => {
    control.el.nextElementSibling.innerText = getInvalidText(control)
  })
}

function getInvalidText(input) {
  switch (input.error) {
    case 'tooLong':
      return `${input.name} is too long.` ;break

    case 'typeMismatch':
    case 'patternMismatch':
      return `Please enter a valid ${input.name}.` ;break

    case 'valueMissing':
      return `Please entre your ${input.name}.` ;break
    default: '' ;break
  }
}

document.querySelector('#contact-form-open').addEventListener('click', function() {
  if(contactFormWrapper.classList.contains('active')) {
    contactFormWrapper.classList.remove('active')
    this.dataset.state = 'closed'
  } else {
    contactFormWrapper.classList.add('show')
    contactFormWrapper.getBoundingClientRect()
    contactFormWrapper.classList.add('active')
    this.dataset.state = 'opened'
  }
})

contactFormWrapper.addEventListener('transitionend', function() {
  if(this.classList.contains('active')) return
  
  contactFormWrapper.classList.remove('show')
})