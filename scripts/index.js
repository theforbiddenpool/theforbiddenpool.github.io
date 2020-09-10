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
const indicators = carousel.querySelectorAll('.carousel-controls .carousel-indicator')
let activeCarouselItem = carouselItems.filter(item => item.classList.contains('active'))[0]
let nextItem
let movedOneSlide = false

carousel.querySelector('.carousel-controls').addEventListener('click', handleCarouselControls)

function handleCarouselControls(e) {
  if(e.target.tagName !== 'BUTTON') return
  e.preventDefault()

  nextItem = carouselItems[e.target.dataset.slideto]

  if(activeCarouselItem == nextItem) return

  if(carouselItems.indexOf(activeCarouselItem) > carouselItems.indexOf(nextItem)) {
    moveCarouselToRight()
  } else {
    moveCarouselToLeft()
  }  

  handleIndicatorChange()
}

function handleIndicatorChange() {
  for (const indicator of indicators) {
    if(indicator.classList.contains('active')) {
      indicator.classList.remove('active')
      continue
    }

    if(indicator.dataset.slideto == carouselItems.indexOf(nextItem)){
      indicator.classList.add('active')
    }
  }
}

function handleTransitionEnd(e) {
  if(e.target == nextItem) {
    nextItem.classList.add('active')
    nextItem.classList.remove('carousel-item-next', 'carousel-item-prev', 'carousel-item-left', 'carousel-item-right')
  } else if(e.target == activeCarouselItem) {
    activeCarouselItem.classList.remove('carousel-item-left', 'carousel-item-right', 'active')
    activeCarouselItem = nextItem
  }

  movedOneSlide = false
}


function moveCarouselToLeft() {
  nextItem.classList.add('carousel-item-next')
  nextItem.getBoundingClientRect()
  nextItem.classList.add('carousel-item-left')
  activeCarouselItem.classList.add('carousel-item-left')
}

function moveCarouselToRight() {
  nextItem.classList.add('carousel-item-prev')
  nextItem.getBoundingClientRect()
  nextItem.classList.add('carousel-item-right')
  activeCarouselItem.classList.add('carousel-item-right')
}

carousel.addEventListener('transitionend', handleTransitionEnd)

/** DRAG ACTION CAROUSEL */
let startX
let mouseDown = false

carousel.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].clientX
})
carousel.addEventListener('touchmove', handleDragMovement)

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

  if(startX > clientX) {
    if(!activeCarouselItem.nextElementSibling) return
    
    nextItem = activeCarouselItem.nextElementSibling
    moveCarouselToLeft()
  } else {
    if(!activeCarouselItem.previousElementSibling) return

    nextItem = activeCarouselItem.previousElementSibling
    moveCarouselToRight()
  }
  movedOneSlide = true

  handleIndicatorChange()
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