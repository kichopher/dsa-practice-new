/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let [l, r] = [0, nums.length - 1]
    while (l <= r) {
        const i = Math.floor((l + r) / 2)
        if (nums[i] === target) return i;
        if (target < nums[i]) {
            r = i - 1;
        } else {
            l = i + 1;
        }
    }
    return -1;
};