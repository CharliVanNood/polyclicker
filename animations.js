clickerRotation = 10

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