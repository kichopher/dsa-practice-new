/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const numCountMap = new Map()
    nums.forEach(num => {
        numCountMap.set(num, (numCountMap.get(num) ?? 0) + 1)
    })
    const numAtCountIndexArray = new Array(nums.length + 1);
    [...numCountMap.entries()].forEach(entry => {
        const [num, freq] = entry;
        if (!Array.isArray(numAtCountIndexArray[freq])) numAtCountIndexArray[freq] = []
        numAtCountIndexArray[freq].push(num);
    })
    const numsInIncreasingOrderOfFreq = []
    numAtCountIndexArray.forEach(item => {
        if (Array.isArray(item))
            numsInIncreasingOrderOfFreq.push(...item);
    })
    return numsInIncreasingOrderOfFreq.slice(-k)
};