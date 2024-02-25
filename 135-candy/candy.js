/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const n = ratings.length;
    const candiesAtIndex = new Array(n).fill(1);
    // left to right pass (determine how many candies more than the left index is required at current index)
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candiesAtIndex[i] = candiesAtIndex[i - 1] + 1;
        }
    } // value at last index will be correct
    // right to left pass
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candiesAtIndex[i] = Math.max(candiesAtIndex[i], candiesAtIndex[i + 1] + 1);
        }
    }

    return candiesAtIndex.reduce((sum, val) => sum += val);
};