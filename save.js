function save() {
    console.log("*** saving ***")
    let upgradeKeys = Object.keys(upgrades)
    for (let upgrade_ = 0; upgrade_ < upgradeKeys.length; upgrade_++) {
        let upgrade = upgradeKeys[upgrade_]
        window.localStorage.setItem(upgrade, upgrades[upgrade])
        console.log("saved " + upgrade + " with value " + upgrades[upgrade])
    }
    window.localStorage.setItem("gems", gems)
    console.log("saved gems with value " + gems)
    console.log("*** done saving ***")
}

function load() {
    let gems_loaded = window.localStorage.getItem("gems")
    if (gems_loaded) gems = Number(gems_loaded)
    let upgradeKeys = Object.keys(upgrades)
    for (let upgrade_ = 0; upgrade_ < upgradeKeys.length; upgrade_++) {
        let upgrade = upgradeKeys[upgrade_]
        let upgrade_loaded = window.localStorage.getItem(upgrade)
        if (upgrade_loaded) {
            upgrades[upgrade] = Number(upgrade_loaded)
            if (upgrade == "shovels") {
                for (let x = 0; x < upgrades[upgrade]; x++) {
                    document.getElementsByClassName("tools1")[0].innerHTML += '<img class="tool" id="shovelTool' + (x + 1) + '" src="images/trowel.png">'
                }
                let new_price = 100 * (1.2 ** upgrades[upgrade])
                if (upgrades[upgrade] < 9) document.getElementById("buy_price1").innerHTML = "$" + Math.round(new_price * 10) / 10
                else document.getElementById("buy_price1").innerHTML = "MAX"
            } else if (upgrade == "shovelSpeed") {
                let new_price = 500 * (1.75 ** upgrades[upgrade])
                if (upgrades[upgrade] < 5) document.getElementById("priceButton1").innerHTML = "$" + Math.round(new_price * 10) / 10
                else document.getElementById("priceButton1").innerHTML = "MAX"
                switch (upgrades[upgrade]) {
                    case 1.5:
                        document.getElementsByClassName("iconButton1")[0].src = "images/stone_trowel.png"
                    break;
                    case 2:
                        document.getElementsByClassName("iconButton1")[0].src = "images/iron_trowel.png"
                    break;
                    case 2.5:
                        document.getElementsByClassName("iconButton1")[0].src = "images/bronze_trowel.png"
                    break;
                    case 3:
                        document.getElementsByClassName("iconButton1")[0].src = "images/steel_trowel.png"
                    break;
                    case 3.5:
                        document.getElementsByClassName("iconButton1")[0].src = "images/golden_trowel.png"
                    break;
                    case 4:
                        document.getElementsByClassName("iconButton1")[0].src = "images/obsidian_trowel.png"
                    break;
                    case 4.5:
                        document.getElementsByClassName("iconButton1")[0].src = "images/amethyst_trowel.png"
                    break;
                    case 5:
                        document.getElementsByClassName("iconButton1")[0].src = "images/emerald_trowel.png"
                    break;
                }
            }
            console.log("loaded " + upgrade + " with value " + upgrade_loaded)
        }
    }
}