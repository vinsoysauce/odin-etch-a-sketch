const box = document.getElementById('box-container');
// BUTTON DOMS
const grid = document.getElementById('grid')
const clear = document.getElementById('clear');
const color = ['red', 'orange', 'yellow', 'green',
               'blue', 'indigo', 'violet'];


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
        darkenColor(squares)
        rectangle.appendChild(squares)
    } 
}
}

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

// BUTTON EVENT LISTENERS
grid.addEventListener('click', () => {
    clearGrid()
    let num = +prompt('Enter a number not more than 100 and not less than 1');
    setGrid(num)
})


setGrid(16)