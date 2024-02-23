/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // Optimal approach: Greedy algorithm. O(n) time and O(1) space
    let maxProfit = 0;
    let buyPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        if (currentPrice < buyPrice) {
            buyPrice = currentPrice;
        } else {
            maxProfit = Math.max(maxProfit, (currentPrice - buyPrice));
        }
    }
    return maxProfit;
};