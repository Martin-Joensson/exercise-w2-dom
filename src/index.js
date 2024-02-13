console.log("Start Here 😉");
//Dom Selectors
const box = document.getElementById("box");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const crazy = document.getElementById("crazy");

// Functions
const changeToDark = () => {
  box.style.backgroundColor = "#663399";
  box.style.transitionDuration = "3s"
}

const changeToLight= () => {
  box.style.backgroundColor = "#ccc";
}

const changeToCrazy= () => {
    box.style.backgroundColor = "lightgreen";
}



// Event listners
dark.addEventListener("click", changeToDark)
light.addEventListener("click", changeToLight)
crazy.addEventListener("click", changeToCrazy)

