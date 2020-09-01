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

const contactForm = document.querySelector('.contact-form form')

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