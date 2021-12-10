const daysDisplay = document.getElementById('days-display')
const percentageDisplay = document.getElementById('percentage')
const meterBar = document.getElementById('meter-bar')

function getDaysTilXmas() {
  const today = new Date() // get current time

  const christmasYear =
    today.getMonth() === 11 && today.getDate() > 25
      ? today.getFullYear() + 1
      : today.getFullYear()
  // determine whether Christmas is this year (< Dec 25) or next year (> Dec 24)

  const christmasDay = new Date(`December 25, ${christmasYear}`) // use christmasYear to create date object for chistmas day

  const totalMilliseconds = christmasDay - today
  // calculate difference in ms between now and chistmas day

  const days = Math.ceil(totalMilliseconds / (1000 * 60 * 60 * 24))
  //  div by 1000 to get secs, then 60 to get mins, then 60 to get hrs, then 24 to get days; round up result

  return days
}

function getProgressPercentage(daysTilXmas) {
  const percentage = ((25 - daysTilXmas) / 25) * 100
  return percentage + '%'
}

const daysTilXmas = getDaysTilXmas()
daysDisplay.textContent = daysTilXmas

const progressPercentage = getProgressPercentage(daysTilXmas)
console.log(progressPercentage)

meterBar.style.width = progressPercentage
percentageDisplay.textContent = progressPercentage

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
