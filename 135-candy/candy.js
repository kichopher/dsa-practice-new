/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function (ratings) {
    // Approach 2 : O(n) time and O(1) space
    let total = 1; // Start with 1 candy for the first child
    let up = 1; // Length of last increasing sequence
    let down = 0; // Length of last decreasing sequence
    let peak = 1; // Peak of the last sequence

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) { // If increasing
            up++;
            total += up; // Add the length of the increasing sequence
            peak = up; // Update peak
            down = 0; // Reset down since we're in an increasing sequence
        } else if (ratings[i] < ratings[i - 1]) { // If decreasing
            down++;
            total += down;
            up = 1; // Reset up since we're in a decreasing sequence
            if (down >= peak) { // If the decreasing sequence is longer than the peak
                total++; // Add one more for the peak
            }
        } else { // If equal
            peak = up = 1; // Reset peak and up
            down = 0; // Reset down
            total++; // Each child must have at least one candy
        }
    }

    return total;
};
/**
var candy = function (ratings) {
    // Approach 1 : O(n) time and O(n) space
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
 */