/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seenNumberIndex = new Map();
    for (let i = 0; i< nums.length; i++){
        const curr = nums[i];
        const req = target - curr;
        if (seenNumberIndex.has(req)){
            return [seenNumberIndex.get(req), i]
        }else {
            seenNumberIndex.set(curr, i)
        }
    }
};