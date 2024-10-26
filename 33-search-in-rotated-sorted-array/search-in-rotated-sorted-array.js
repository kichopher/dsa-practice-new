/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let [l, r] = [0, nums.length - 1]

    while (l <= r) {
        const i = Math.floor((l + r) / 2);
        if (nums[i] === target) {
            return i;
        }
        if (nums[l] <= nums[i]) { // left of i is sorted
            if ((nums[l] <= target && target < nums[i])) { // if target could fall within the left (sorted portion), search left
                r = i - 1;
            } else {
                l = i + 1; // search right
            }
        } else { // right of i is sorted
            if (nums[i] < target && target <= nums[r]) { // if target could fall within the right (sorted portion), search right
                l = i + 1;
            } else {
                r = i - 1; // search left
            }
        }
    }
    return -1;
};