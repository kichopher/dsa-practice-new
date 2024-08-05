/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let p = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[p] = nums[i];
            p += 1;
        }
    }
    return p;
};