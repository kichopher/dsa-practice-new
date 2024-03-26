/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    /** With sorting 
    https://leetcode.com/problems/3sum/solutions/281302/javascript-with-lots-of-explanatory-comments
    */

    let sortedNums = [...nums].sort((a, b) => a - b);
    const results = []
    const target = 0;
    let i = 0;
    while (i < sortedNums.length - 2 && sortedNums[i] <= target) {
        while (i > 0 && sortedNums[i - 1] === sortedNums[i]) i++;
        let j = i + 1;
        let k = sortedNums.length - 1;
        while (j < k) {
            const sum = sortedNums[i] + sortedNums[j] + sortedNums[k]
            if (sum === target) {
                results.push([sortedNums[i], sortedNums[j], sortedNums[k]])
                while (sortedNums[j] === sortedNums[j + 1]) j++;
                while (sortedNums[k] === sortedNums[k - 1]) k--;
                j++; k--;
            } else if (sum < target) {
                j++;
            } else if (sum > target) {
                k--;
            }
        }
        i++;
    }
    return results;
};