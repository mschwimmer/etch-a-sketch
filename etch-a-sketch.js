// The container of all the squares, our canvas
const container = document.querySelector('.container')

function setGrid(numSquares) {
    // Removes all existing squares
    container.replaceChildren()
    // sideLength is %
    let sideLength = 100 / numSquares
//    console.log("container width is " + container.offsetWidth)
//    console.log("side length is " + sideLength)
    for (let i = 0; i < numSquares; i++){
        for (let j = 0; j < numSquares; j++){
            const div = document.createElement('div')
            div.classList.add('square')
//            div.textContent = 'box'
            div.style.width = sideLength + "%"
            div.style.height = sideLength + "%"
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

// Resize Button
const resizeButton = document.querySelector("#reset-btn")
resizeButton.addEventListener("click", () => {
    console.log("Clicked resize button")
    let newSize = prompt("How many squares per side?")
    console.log(newSize)

    if (newSize > 100){
        alert("Too many squares, must be less than 100")
        setGrid(16)
    }
    else {
        setGrid(newSize)
    }
})