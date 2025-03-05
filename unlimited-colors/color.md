# Unlimited Colors Project

## html
```html
<body style="background-color: #212121; color: #fff">
    <div class="main-div">
      <h1>Unlimited Colors</h1>
      <button id="start">Start</button>
      <button id="stop">Stop</button>
      <script src="color.js"></script>
    </div>
  </body>
```
## css
```css
.main-div {
  text-align: center;
  font-family: system-ui;
}
h1{
    letter-spacing:10px;
}
button {
  font-size: 25px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 2px 5px white;
  font-family: fantasy;
  letter-spacing: 2px;
  margin-right: 20px;
  color:#fff;
}
#start{
    background-color:green;
}
#stop{
    background-color:red;
}
```
## javascript
```js
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
```