const box = document.getElementById('box-container');
// BUTTONS
const grid = document.getElementById('grid')
const clear = document.getElementById('clear');

grid.addEventListener('click', () => {
    clearGrid()
    let numOfSquares = +prompt('Enter a number not more than 100');
    setGrid(numOfSquares)
})



function setGrid(num) {
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
        rectangle.appendChild(squares)
    } 
}
}

function clearGrid() {
    box.textContent = '';
}