clickerRotation = 10
mineIndex = 0

leaves = document.getElementsByClassName("leaves")
leafPositions = []
for (let leaf_ = 0; leaf_ < leaves.length; leaf_++) {
    let leaf = leaves[leaf_]
    leafPositions.push([
        Number(leaf.style.left.replace("%", "")),
        Number(leaf.style.top.replace("%", "")),
        leaf
    ])
}

function RotateClicker() {
    clicker.style.transform = "translate(-50%, -50%) rotate(" + clickerRotation + "deg)"
    clickerRotation += 0.2
}

function clickedClicker() {
    if (clicked) return
    clicker.id = "clicked"
    clicked = true
    createParticles(10)
    gems += 1
}

function UpdateLeaves() {
    for (let leaf_ = 0; leaf_ < leafPositions.length; leaf_++) {
        leafPositions[leaf_][2].style.left = Math.cos(clickerRotation / 5 + leafPositions[leaf_][0]) / 5 + leafPositions[leaf_][0] + "%"
        leafPositions[leaf_][2].style.top = Math.cos(clickerRotation / 5 + leafPositions[leaf_][1]) / 5 + leafPositions[leaf_][1] + "%"
    }
}

function updateMine1() {
    let index_last = (Math.floor(mineIndex / (10 / upgrades["shovelSpeed"])) - 1) % 9 + 1
    let index_ = Math.floor(mineIndex / (10 / upgrades["shovelSpeed"])) % 9 + 1
    let toolOld = document.getElementById("shovelTool" + index_last)
    if (toolOld) toolOld.style.top = "5%"
    let tool = document.getElementById("shovelTool" + index_)
    if (tool) {
        tool.style.top = "50%"
        if (index_ != Math.floor((mineIndex - 1) / (10 / upgrades["shovelSpeed"])) % 9 + 1) {
            gems += 1
        }
    }
}

function UpdateMines() {
    updateMine1()
    mineIndex += 1
}