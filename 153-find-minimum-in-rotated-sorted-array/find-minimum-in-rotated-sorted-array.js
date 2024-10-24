/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let [l, r] = [0, nums.length - 1]
    let minNum = nums[l];
    while (l <= r) {
        if (nums[l] <= nums[r]) {
            minNum = Math.min(minNum, nums[l])
            break;
        }

        const i = Math.floor((l + r) / 2)
        minNum = Math.min(minNum, nums[i])
        if (nums[l] > nums[i]) {
            r = i - 1; // search in left-half
        } else {
            l = i + 1; // search in right-half
        }
    }
    return minNum;
};