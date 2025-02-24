const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
// console.log(buttons)

buttons.forEach(function (button) {
  //   console.log(button)
  button.addEventListener("click", function (e) {
    // console.log(e) // to check events
    // console.log(e.target) // to check from where events come
    if (e.target.id === "maroon") {
      body.style.backgroundColor = e.target.id
      body.style.color = "#FFF2F2"
    }
    if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id
      body.style.color = "#6A1E55"
    }
    if (e.target.id === "cyan") {
      body.style.backgroundColor = e.target.id
      body.style.color = "#4C3BCF"
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id
      body.style.color = "#DAD2FF"
    }
  })
})
