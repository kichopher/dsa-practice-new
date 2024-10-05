/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let [l, r] = [0, numbers.length - 1];
    // there will be exactly one solution, hence skipping edge cases.
    while (l < r) {
        const sum = numbers[l] + numbers[r];
        if (sum === target) return [l + 1, r + 1];
        else if (sum < target) { l++; }
        else { r--; }
    }
    // control wouldn't reach here. Time O(n), space O(1)
};