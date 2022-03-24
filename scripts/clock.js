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

    let dayName

    if (numberOfDay === 0) dayName = 'SUN'
    if (numberOfDay === 1) dayName = 'MON'
    if (numberOfDay === 2) dayName = 'TUE'
    if (numberOfDay === 3) dayName = 'WED'
    if (numberOfDay === 4) dayName = 'THU'
    if (numberOfDay === 5) dayName = 'FRI'
    if (numberOfDay === 6) dayName = 'SAT'
  
    document.querySelector('[data-time]').innerHTML = `${hours}:${minutes}:${seconds}`
    document.querySelector('[data-date]').innerHTML = `${dayName} ${day} / ${month} / ${year}`

    document.querySelector('[data-copy]').innerHTML = `© 2020 - ${year}, František Borisjuk`
  }, 1)