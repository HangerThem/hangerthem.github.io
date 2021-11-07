//Clock
function startTime() {
  setTimeout(startTime, 1000)

  const today = new Date();

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

  //Make time more uniform
  function zeroAdder(subject) {
    if (subject < 10) return `0${subject}`
    return subject
  }

  document.querySelector('[data-time]').innerHTML = `${hours}:${zeroAdder(minutes)}:${zeroAdder(seconds)}`
  document.querySelector('[data-date]').innerHTML = `${dayName(numberOfDay)} ${day} / ${month} / ${year}`
}

//Social meadia alert
function alertOpen() {
  alert('Sorry, I don\'t want to link my poor social media here.')
}

//Nabvar dropdown
const menuBtn = document.querySelector('[data-burger]')
const navbar = document.querySelector('[data-navbar]')
let menuOpen = false

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open')
    navbar.style.display = 'flex'
    navbar.style.flexDirection = 'column'
    menuOpen = true
  }
  else {
    menuBtn.classList.remove('open')
    navbar.style.display = 'none'
    menuOpen = false
  }
})