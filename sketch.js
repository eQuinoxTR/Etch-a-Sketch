let amountOfSquares = 32; 
let root = document.documentElement;
const container = document.querySelector(".container");
const input = document.querySelector("#userInput");
let color = document.querySelector(".colorPicker")
const centerX = root.clientWidth/2;
const centerY = root.clientHeight/2
let getPositionX = 0;
let getPositionY = 0;
let getGridWidthHeight = 850;
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
                     grid.setAttribute("id", "click"); 
                     grid.style.background = `${color.value}`
                    }
        })
    })
}   
    // experiment :)
    requestAnimationFrame(move)

    function move() {
        root.addEventListener("mousemove", (e) => {
            if (e.buttons == "2") {
                document.querySelector("#txtA").style.color = "transparent";
                getPositionX += (e.clientX - centerX)/25; // based on the mouse position and the center, move right or left and store it
                getPositionY += (e.clientY - centerY)/25; // based on the mouse position and the center, move up or down and store it
                // sensitivity 31 times lesser, otherwise html goes flying :o
                root.style.setProperty('--mouse-x', ((getPositionX) + "px"));
                root.style.setProperty('--mouse-y', ((getPositionY) + "px"));
            }
        }); 
    }

    root.addEventListener("wheel", (e) => {

        if (e.deltaY > 0) { // if wheel goes up
        getGridWidthHeight += 25;
        container.style.width = getGridWidthHeight;
        container.style.height = getGridWidthHeight;
        } else if (e.deltaY < 0){ // if wheel goes down
            getGridWidthHeight -= 25;
            container.style.width = getGridWidthHeight;
            container.style.height = getGridWidthHeight;
        } 

        if (getGridWidthHeight > 1450) {getGridWidthHeight = 1450} 
        else if(getGridWidthHeight < 600){getGridWidthHeight = 600}
        document.querySelector("#txtB").style.color = "transparent";
    })

    const div = document.querySelector("div")
    div.addEventListener("dragstart", (e) => {e.preventDefault()});
    root.addEventListener("contextmenu", (e) => {e.preventDefault()});

    function toggleTheme(){
        let changeTheme = root.classList.value == "light-theme" ? "dark-theme" : "light-theme";
        return root.className = changeTheme;
    }

    document.querySelector(".theme-icon")
            .addEventListener("click", () => toggleTheme());