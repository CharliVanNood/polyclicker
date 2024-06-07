upgrades = {
    "shovels": 0
}

function BuyExtraShovel() {
    let price = 100 * (1.2 ** upgrades["shovels"])
    if (gems >= price && upgrades["shovels"] < 9) {
        upgrades["shovels"] += 1
        gems -= price
        document.getElementsByClassName("tools1")[0].innerHTML += '<img class="tool" id="shovelTool' + upgrades["shovels"] + '" src="images/trowel.png">'
        let new_price = 100 * (1.2 ** upgrades["shovels"])
        document.getElementById("buy_price1").innerHTML = "$" + Math.round(new_price * 10) / 10
    }
}