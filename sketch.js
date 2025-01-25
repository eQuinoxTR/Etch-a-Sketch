let amountOfSquares = 100; 
let root = document.documentElement;
const container = document.querySelector(".container");
const input = document.querySelector("#userInput");
let color = document.querySelector(".colorPicker")
createGrid();

input.addEventListener("input", () => {
    amountOfSquares = +`${input.value}`;
    container.replaceChildren(); // cleans the old grid in case of an input
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
            grid.addEventListener("mousemove", (e) => {
                if (e.buttons) {
                     grid.setAttribute("id", "clickAfter"); 
                     grid.style.background = `${color.value}`
                    }
        })
    })

}
    const div = document.querySelector("div")
    div.addEventListener("dragstart", (e) => {e.preventDefault()});

    function toggleTheme(){
        let changeTheme = root.classList.value == "light-theme" ? "dark-theme" : "light-theme";
        return root.className = changeTheme;
    }

    document.querySelector(".theme-icon")
            .addEventListener("click", () => toggleTheme());