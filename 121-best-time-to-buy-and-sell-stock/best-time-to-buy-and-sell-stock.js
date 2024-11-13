/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // Sliding window: O(n) time and O(1) space
    let maxProfit = 0;
    let [l, r] = [0, 1]; // left==buy, right==sell
    while (r < prices.length) {
        const [buyPrice, sellPrice] = [prices[l], prices[r]]
        const currentProfit = sellPrice - buyPrice;
        if (currentProfit < 0) { // sellPrice < buyPrice
            l = r;
        } else {
            maxProfit = Math.max(maxProfit, currentProfit)
        }
        r++;
    }
    return maxProfit;
};