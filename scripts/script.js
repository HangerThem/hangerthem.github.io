//Clock
function startTime() {
  setTimeout(startTime, 1000)

  const today = new Date();
  const timeFormater = new Intl.NumberFormat('en-us', {
    minimumIntegerDigits: 2
  })

  var numberOfDay = today.getUTCDay()
  var year = today.getFullYear()
  var month = today.getMonth()
  var day = today.getDate()
  var hours = today.getHours()
  var minutes = today.getMinutes()
  var seconds = today.getSeconds()

  //Choose name of day
  function dayName(day) {
    switch (day) {
      case 0:
        return 'SUN'
      case 1:
        return 'MON'
      case 2:
        return 'TUE'
      case 3:
        return 'WED'
      case 4:
        return 'THR'
      case 5:
        return 'FRI'
      case 6:
        return 'SAT'
      default:
        return ''
    }
  }

  document.querySelector('[data-time]').innerHTML = `${hours}:${timeFormater.format(minutes)}:${timeFormater.format(seconds)}`
  document.querySelector('[data-date]').innerHTML = `${dayName(numberOfDay)} ${day} / ${month} / ${year}`
}

//Social meadia alert
function alertOpen() {
  alert('Sorry, I don\'t want to link my poor social media here.')
}

//Nabvar dropdown
const burgerButton = document.querySelector('[data-burger]')
const navbar = document.querySelector('[data-navbar]')
const cutter = document.querySelector('[data-cutter]')
let burgerOpen = false

burgerButton.addEventListener('click', () => {
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
const switchButton = document.querySelector('[data-mode]')
const root = document.documentElement
let lightMode = false

switchButton.addEventListener('click', () => {
  if (!lightMode) {
    root.style.setProperty('--primar', '#FFF')
    root.style.setProperty('--white', '#000')
    lightMode = true
  }
  else {
    root.style.setProperty('--primar', '#000')
    root.style.setProperty('--white', '#FFF')
    lightMode = false
  }
})