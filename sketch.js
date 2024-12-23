let amountOfSquares = 100; 
const container = document.querySelector(".container");
const input = document.querySelector("#userInput");
createGrid();

input.addEventListener("input", () => {
    amountOfSquares = +`${input.value}`;
    container.replaceChildren() // cleans the old grid in case of an input
    createGrid();
    return amountOfSquares;
});

function createGrid (){
    if (amountOfSquares > 100) {amountOfSquares = 100;}

for (let column = 0; column < amountOfSquares; column++){
    let gridColumnContainers = document.createElement("div");
    gridColumnContainers.classList.add("gridColumnContainers")
    container.appendChild(gridColumnContainers)

    for (let row = 0; row < amountOfSquares; row++) {
        let gridRowDivs = document.createElement("div");
        gridRowDivs.classList.add("grid");
        gridColumnContainers.appendChild(gridRowDivs);
    }
}
    let grid = document.querySelectorAll(".grid");
        grid.forEach( grid => {
            grid.addEventListener("mouseover", (e) => {
            if (e.buttons) {
            grid.setAttribute("id", "clickAfter");
        }
        })
    })
}
    const div = document.querySelector("div")
    div.addEventListener("dragstart", (e) => {e.preventDefault()});



