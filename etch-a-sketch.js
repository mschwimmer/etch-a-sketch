// The container of all the squares, our canvas
const container = document.querySelector('.container')

function setGrid(numSquares) {
    // Removes all existing squares
    container.replaceChildren()
    let sideLength = container.offsetWidth / numSquares
    for (let i = 0; i < numSquares; i++){
        for (let j = 0; j < numSquares; j++){
            const div = document.createElement('div')
            div.classList.add('square')
            div.style.width = sideLength
            div.style.height = sideLength
            container.appendChild(div)
        }
    }

    const squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            //console.log(`Entered ${square.textContent}`)
            square.style.backgroundColor = 'black'
        })
    })
}

// First, create a grid of 16x16 divs
setGrid(16)
// TODO, add reset size functionality to button