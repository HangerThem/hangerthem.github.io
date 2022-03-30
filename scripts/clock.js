setInterval(() => {
  const date = new Date()

  const timeFormater = new Intl.NumberFormat('en-us', {minimumIntegerDigits: 2})

  const numberOfDay = date.getUTCDay()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const hours = timeFormater.format(date.getHours())
  const minutes = timeFormater.format(date.getMinutes())
  const seconds = timeFormater.format(date.getSeconds())

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  document.querySelector('[data-time]').innerHTML = `${hours}:${minutes}:${seconds}`
  document.querySelector('[data-date]').innerHTML = `${days[numberOfDay]} ${day} / ${month} / ${year}`
}, 1)