/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;
    let maxSeqLen = 1; 
    const numSet = new Set(nums);
    nums.forEach(num => {
        // num is start of a sequence iff numSet doesn't have num-1
        if (!numSet.has(num - 1)) {
            // once a start is found, extend the sequence as long as possible with numbers from numSet
            let i = num;
            let currSeqLen = 1;
            while (numSet.has(i + 1)) {
                currSeqLen++;
                maxSeqLen = Math.max(maxSeqLen, currSeqLen);
                i++;
            }
        }
    })
    return maxSeqLen;
};