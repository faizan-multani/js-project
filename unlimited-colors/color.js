//generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}

let intervalId
const startChangingColor = function () {
  if (!intervalId) { // means null
    intervalId = setInterval(changeBgColor, 1000)
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor()
    // document.body.style.color = randomColor()
  }
}
const stopChangingColor = function () {
  clearInterval(intervalId)
  intervalId = null // in intervalId will be flushed (no value in intervalId)
}

document.querySelector("#start").addEventListener("click", startChangingColor)

document.querySelector("#stop").addEventListener("click", stopChangingColor)
