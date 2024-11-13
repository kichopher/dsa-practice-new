/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const maxToRightOfIx = new Array(prices.length).fill(0);
    for (let i = prices.length - 2; i >= 0; i--) {
        maxToRightOfIx[i] = Math.max(prices[i + 1], maxToRightOfIx[i + 1])
    }
    let maxProfit = 0;
    prices.forEach((price, ix) => {
        maxProfit = Math.max(maxProfit, maxToRightOfIx[ix] - price)
    })
    return maxProfit;
};