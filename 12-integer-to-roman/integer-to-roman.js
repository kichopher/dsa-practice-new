/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const descValueSymbols = [];
    const valueSymbolPushHelper = (val, symbol) => descValueSymbols.push({ value: val, symbol });
    valueSymbolPushHelper(1000, "M")
    valueSymbolPushHelper(900, "CM")
    valueSymbolPushHelper(500, "D")
    valueSymbolPushHelper(400, "CD")
    valueSymbolPushHelper(100, "C")
    valueSymbolPushHelper(90, "XC")
    valueSymbolPushHelper(50, "L")
    valueSymbolPushHelper(40, "XL")
    valueSymbolPushHelper(10, "X")
    valueSymbolPushHelper(9, "IX")
    valueSymbolPushHelper(5, "V")
    valueSymbolPushHelper(4, "IV")
    valueSymbolPushHelper(1, "I")

    let romanStr = ""
    let numBal = num
    for (let i = 0; i < descValueSymbols.length; i++) {
        const { value, symbol } = descValueSymbols[i]
        const currentValueCountInNum = Math.trunc(numBal / value)
        const symbolToAppend = new Array(currentValueCountInNum).fill(symbol).join("");
        romanStr += symbolToAppend
        numBal -= (currentValueCountInNum * value)
    }
    return romanStr
};