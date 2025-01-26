let amountOfSquares = 50; 
let root = document.documentElement;
const container = document.querySelector(".container");
const input = document.querySelector("#userInput");
let color = document.querySelector(".colorPicker")
const centerX = root.clientWidth/2;
const centerY = root.clientHeight/2
createGrid();

input.addEventListener("input", () => {
    amountOfSquares = +`${input.value}`;
    container.replaceChildren(); // cleans the old grid in case of an input
    createGrid();
    return amountOfSquares;
});

function createGrid (){
    if (amountOfSquares > 70) {amountOfSquares = 70;}

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
                if (e.buttons == "1") {
                     grid.setAttribute("id", "clickAfter"); 
                     grid.style.background = `${color.value}`
                    }
        })
    })
}
    root.addEventListener("mousemove", (e) => {
        if (e.buttons == "2") {
            root.style.setProperty('--mouse-x', (e.clientX - centerX) + "px"); // to the center elements if right click, im experimenting for the sake of practice
            root.style.setProperty('--mouse-y', (e.clientY - centerY) + "px");
        }
    }); // 958 450
    const div = document.querySelector("div")
    div.addEventListener("dragstart", (e) => {e.preventDefault()});
    root.addEventListener("contextmenu", (e) => {e.preventDefault()});

    function toggleTheme(){
        let changeTheme = root.classList.value == "light-theme" ? "dark-theme" : "light-theme";
        return root.className = changeTheme;
    }

    document.querySelector(".theme-icon")
            .addEventListener("click", () => toggleTheme());