/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // Approach 1: Brute force: for-each number, find the difference with a later number
    // O(n2) time
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