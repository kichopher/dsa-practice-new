/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    const ans = [];
    const n = nums.length;
    for (i = 0; i < 2 * n; i++) {
        if (i < n) {
            ans.push(nums[i]);
        } else {
            ans.push(nums[i - n]);
        }
    }
    return ans;
};