/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;
    for (let i=1; i< prices.length; i++){
        const currentPrice = prices[i];
        if (currentPrice > buyPrice){
            profit+= currentPrice - buyPrice;
            
        }
        buyPrice = currentPrice;
    }
    return profit;
};