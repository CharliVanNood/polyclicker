var upgrades = {
    "shovels": 0,
    "shovelSpeed": 1
}

function BuyExtraShovel() {
    let price = 100 * (1.2 ** upgrades["shovels"])
    if (gems >= price && upgrades["shovels"] < 9) {
        upgrades["shovels"] += 1
        gems -= price
        document.getElementsByClassName("tools1")[0].innerHTML += '<img class="tool" id="shovelTool' + upgrades["shovels"] + '" src="images/trowel.png">'
        let new_price = 100 * (1.2 ** upgrades["shovels"])
        if (upgrades["shovels"] < 9) document.getElementById("buy_price1").innerHTML = "$" + Math.round(new_price * 10) / 10
        else document.getElementById("buy_price1").innerHTML = "MAX"
    }
}

function BuyExtraSpeedShovel() {
    let price = 500 * (1.75 ** upgrades["shovelSpeed"])
    if (gems >= price && upgrades["shovelSpeed"] < 5) {
        upgrades["shovelSpeed"] += 0.5
        console.log(upgrades["shovelSpeed"])
        gems -= price
        switch (upgrades["shovelSpeed"]) {
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
        let  new_price = 500 * (1.75 ** upgrades["shovelSpeed"])
        if (upgrades["shovelSpeed"] < 5) document.getElementById("priceButton1").innerHTML = "$" + Math.round(new_price * 10) / 10
        else document.getElementById("priceButton1").innerHTML = "MAX"
    }
}