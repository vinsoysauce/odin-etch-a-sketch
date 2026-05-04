// CONTAINER DOM
const box = document.getElementById('box-container');
// BUTTON DOMS
const grid = document.getElementById('grid')
const clear = document.getElementById('clear');
const color = ['red', 'orange', 'yellow', 'green',
               'blue', 'indigo', 'violet'];

// SET GRID, COLUMNS, SQUARES FUNCTIONS
function setGrid(num) {
    checkInput(num)
    makeColumns(num)
}

const makeColumns = (num) => {
    for (let i = 1; i <= num; i++) {
        const rectangle = document.createElement('div');
        rectangle.style.display = 'flex';
        rectangle.style.flexDirection = 'column';
        rectangle.style.flex = '1';
        box.appendChild(rectangle);
        makeSquares(num, rectangle)
    }
}

const makeSquares = (num, object) => {
    for (let i = 1; i <= num; i++) {
        const squares = document.createElement('div');
        squares.style.flex = '1';
        randomColor(squares)
        darkenColor(squares)
        object.appendChild(squares)
    }
}

// GRID COLOR FUNCTIONS
function darkenColor(squares) {
    let num = 0.10;
    squares.addEventListener('mouseover', (event) => {
        num += 0.10
        squares.style.opacity = num;
    })
}

function randomColor(square) {
    let random = Math.floor(Math.random() * 6)
    square.addEventListener('mouseover', (event) => {
        square.style.backgroundColor = color[random];
    })
}

function clearGrid() {
    box.textContent = ''
}

// CHECK VALID INPUT FUNCTIONS

function checkInput(num) {
    if (num == '' || num > 100 || num < 1) {
        alert('Invalid value! will set it to 16x16!')
        return 16
    }
    return num
}

// BUTTON EVENT LISTENER
grid.addEventListener('click', () => {
    clearGrid()
    num = prompt('Enter a number not more than 100 and not less than 1');
    num = checkInput(num)
    setGrid(num)
})

setGrid(16)