# Keyboard Check

# html
```html
 <div class="project">
      <div id="insert">
        <div class="key">Press the key</div>
      </div>
    </div>
```
# css
```css
table,
th,
td {
  border: 1px solid #e7e7e7;
  padding: 10px;
  border-collapse: collapse;

}
.project {
  background-color: #1c1c1c;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
}

.color {
  color: aliceblue;
  display: flex;
  flex-direction: row;
}
```

# javascript
```js
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});
```