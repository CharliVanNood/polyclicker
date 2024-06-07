const clicker = document.getElementsByClassName("clicker_image")[0]
const gemsLabel = document.getElementById("gems")

clickedFrame = 0
var clicked = false

var gems = 0

var saveInterval = 600

clicker.addEventListener("click", e => {
    clickedClicker()
    clickedFrame = 5
})

load()

function run() {
    RotateClicker()
    UpdateLeaves()
    UpdateMines()
    DrawParticles()
    if (clicked && clickedFrame <= 0) {
        document.getElementById("clicked").id = "not_clicked"
        clicked = false
    }
    clickedFrame -= 1
    gemsLabel.innerHTML = Math.floor(gems)
    if (saveInterval <= 0) {
        save()
        saveInterval = 600
    }
    saveInterval -= 1
}

setInterval(run, 16.66)