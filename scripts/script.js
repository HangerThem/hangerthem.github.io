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
document.querySelector('[data-mode]').addEventListener('click', () => {
  const theme = document.querySelector('html').dataset.theme
  if (theme === 'light') document.querySelector('html').dataset.theme = 'dark'
  else document.querySelector('html').dataset.theme = 'light'
})

const date = new Date()
document.querySelector('[data-copy]').innerHTML = `© 2020 - ${date.getFullYear()}, František Borisjuk`