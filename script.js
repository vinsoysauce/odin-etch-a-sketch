const box = document.getElementById('box-container');
// BUTTON DOMS
const grid = document.getElementById('grid')
const clear = document.getElementById('clear');
let colors = ['#caf0f8', '#ade8f4', '#90e0ef', 
              '#48cae4', '#00b4d8', '#0096c7'];


function setGrid(num) {
    if (num < 1 || num > 100) {
        alert('Invalid value! will set it to 16x16!')
        num = 16
    }
    for (let i = 1; i <= num; i++) {
        const rectangle = document.createElement('div');
        rectangle.style.display = 'flex';
        rectangle.style.flexDirection = 'column';
        rectangle.style.flex = '1';
        rectangle.style.flexWrap = 'wrap';
        box.appendChild(rectangle);
    for (let j = 1; j <= num; j++) {
        const squares = document.createElement('div')
        squares.style.border = '1px solid cornflowerblue';
        squares.style.width = 'auto'
        squares.style.height = 'auto'
        squares.style.flexGrow = '1';
        randomColor(squares)
        rectangle.appendChild(squares)
    } 
}
}

function randomColor(squares) {
    let randomColor = Math.round(Math.random() * 6)
    squares.addEventListener('mouseover', (event) => {
        squares.style.background = colors[randomColor];
    })
}

function clearGrid() {
    box.textContent = ''
}

// BUTTON EVENT LISTENERS
grid.addEventListener('click', () => {
    clearGrid()
    let num = +prompt('Enter a number not more than 100 and not less than 1');
    setGrid(num)
})


setGrid(16)