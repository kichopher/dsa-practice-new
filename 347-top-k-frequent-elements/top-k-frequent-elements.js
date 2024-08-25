/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const numCounter = new Map();
    nums.forEach(num => {
        if (numCounter.has(num)) {
            numCounter.set(num, numCounter.get(num) + 1)
        } else {
            numCounter.set(num, 1)
        }
    })
    const numCountEntries = [...numCounter.entries()]
    numCountEntries.sort((a, b) => b[1] - a[1]); // sort in decreasing order of numCount O(nlogn)
    const ans = [];
    for (let i = 0; i < Math.min(k, numCountEntries.length); i++) {
        ans.push(numCountEntries[i][0])
    }
    return ans;
};