/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const seenNumberSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (seenNumberSet.has(num)) {
            return true
        }
        seenNumberSet.add(num);
    }
    return false
};