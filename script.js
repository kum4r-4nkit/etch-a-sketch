let gridSize = 16


// set area of grid to 80% of min(H/W)
let screenHeight = window.innerHeight
let screenWidth = window.innerWidth
let viewArea = (screenHeight > screenWidth ? screenWidth : screenHeight) * 0.8
let container = document.getElementById('container')
container.setAttribute("style", `height: ${viewArea}px; width: ${viewArea}px; display: flex; flex-direction: column`)


// create grid and set style
function populateGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    let rowDiv = document.createElement('div')
    rowDiv.setAttribute("class", "row")
    container.appendChild(rowDiv)
    rowDiv.setAttribute("style", "display: flex; flex: auto")
    for (let j = 0; j < gridSize; j++) {
      let colDiv = document.createElement('div')
      colDiv.setAttribute("class", "col")
      rowDiv.appendChild(colDiv)
      colDiv.setAttribute("style", "border: 1px solid lightblue; background-color: white; display: flex; flex: auto;")
    }
  }
}
populateGrid(gridSize)


// remove grid
function removeGrid () {
  let rows = document.querySelectorAll('.row')  
  for (const row of rows) {
    row.remove()
  }
}


// grid size slider
let gridSliderValue = document.getElementById('grid-slider-value')
let gridShownSize = document.getElementById('grid-shown-size')
gridSliderValue.onchange = () => onChangeSlider()
function onChangeSlider () {
  gridShownSize.textContent = `${gridSliderValue.value}x${gridSliderValue.value}`
  gridSize = gridSliderValue.value
  removeGrid()
  populateGrid(gridSize)
}


// change color with increasing opacity
function changeColor () {
  container.onmouseover = (e) => {
    let currOpacity = e.target.style.opacity    
    let newOpacity = Math.min(+currOpacity + 0.1, 1)
    getRandomColor()
    e.target.style.backgroundColor = getRandomColor()    
    e.target.style.opacity = newOpacity
    
  }
}
changeColor()


// get random color
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getRandomColor() {
  let rgb = [getRandomInt(256), getRandomInt(256), getRandomInt(256)]  
  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
}


// Erase button
function resetAll () {
  removeGrid()
  populateGrid(gridSize)
}
let reset = document.querySelector('.reset')
reset.onclick = () => resetAll()
