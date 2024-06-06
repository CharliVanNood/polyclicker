const clicker = document.getElementsByClassName("clicker_image")[0]
const gemsLabel = document.getElementById("gems")

clickedFrame = 0
var clicked = false

var gems = 0

clicker.addEventListener("click", e => {
    clickedClicker()
    clickedFrame = 5
})

function run() {
    RotateClicker()
    UpdateLeaves()
    DrawParticles()
    if (clicked && clickedFrame <= 0) {
        document.getElementById("clicked").id = "not_clicked"
        clicked = false
    }
    clickedFrame -= 1
    gemsLabel.innerHTML = gems
}

setInterval(run, 16.66)