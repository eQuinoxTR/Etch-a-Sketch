let amountOfSquares = 32; 
let root = document.documentElement;
const container = document.querySelector(".container");
const input = document.querySelector("#userInput");
let color = document.querySelector(".colorPicker")
let getGridWidthHeight = 850;
// storage values
let getY = 0; 
let getX = 0;
let getMoveOnX = 0; 
let getMoveOnY = 0;
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
    function movement () {
        root.addEventListener("contextmenu", (e) => {
            getY = e.clientY; // mouse position when click
            getX = e.clientX;

            function mouseMove (e) {
                // last mouse position vs new mouse position, with 1px difference after the mouse move
                getMoveOnX = (getX - e.clientX); 
                getMoveOnY = (getY - e.clientY);
                        //    last      new

                // store the new 1px mouse move for the next operation
                getY = e.clientY; 
                getX = e.clientX;

                console.log({getMoveOnX, getMoveOnY})
                // change the position left/top by 1px
                root.style.setProperty('--mouse-x', ((root.offsetLeft - getMoveOnX) + "px"));
                root.style.setProperty('--mouse-y', ((root.offsetTop - getMoveOnY) + "px"));

            }

            root.addEventListener("mousemove", mouseMove);
            root.addEventListener("mouseup", (e) => {
                root.removeEventListener("mousemove", mouseMove)
            });

            document.querySelector("#txtA").style.color = "transparent";
        })
    }
    requestAnimationFrame(movement);

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