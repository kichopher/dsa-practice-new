/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const numFreq = new Map();
    nums.forEach(num => {
        numFreq.set(num, (numFreq.get(num) ?? 0) + 1);
    })
    const freqGroupedNums = []; // index is the frequency
    for (let i = 0; i < nums.length + 1; i++) {
        freqGroupedNums.push([]);
    }
    [...numFreq.entries()].forEach(([num, freq]) => {
        freqGroupedNums[freq].push(num);
    })
    const uniqueNumsSortedByAscendingFreq = [];
    freqGroupedNums.forEach(group => {
        uniqueNumsSortedByAscendingFreq.push(...group);
    })
    return uniqueNumsSortedByAscendingFreq.slice(-k);
};