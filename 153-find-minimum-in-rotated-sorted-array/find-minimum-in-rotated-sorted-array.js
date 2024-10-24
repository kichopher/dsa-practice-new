/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let [l, r] = [0, nums.length - 1]
    let minNum = nums[l];
    while (l <= r) {
        const i = Math.floor((l + r) / 2)
        if (nums[l] <= nums[i]) {
            minNum = Math.min(minNum, nums[l])
            l = i + 1;
        } else {
            minNum = Math.min(minNum, nums[i])
            r = r - 1;
        }
    }
    return minNum;
};