//Nabvar dropdown
let burgerOpen = false

document.querySelector('[data-burger]').addEventListener('click', () => {
  const burgerButton = document.querySelector('[data-burger]')
  const navbar = document.querySelector('[data-navbar]')
  const cutter = document.querySelector('[data-cutter]')
  if (!burgerOpen) {
    burgerButton.classList.add('open')
    navbar.style.display = 'flex'
    navbar.style.flexDirection = 'column'
    cutter.style.display = 'block'
    burgerOpen = true
  }
  else {
    burgerButton.classList.remove('open')
    navbar.style.display = 'none'
    cutter.style.display = 'none'
    burgerOpen = false
  }
})

//Dark/Light mode
document.querySelector('html').dataset.theme = localStorage.getItem('mode') || 'light'
document.querySelector('[data-mode]').addEventListener('click', () => {
  if (localStorage.getItem('mode') === 'dark') localStorage.setItem('mode', 'light')
  else localStorage.setItem('mode', 'dark')
  document.querySelector('html').dataset.theme = localStorage.getItem('mode')
})

const date = new Date()
document.querySelector('[data-copy]').innerHTML = `© 2020 - ${date.getFullYear()}, František Borisjuk`