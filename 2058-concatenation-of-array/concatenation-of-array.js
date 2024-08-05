/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    const ans = [];
    const n = nums.length;
    for (k = 0; k < 2; k++) {
        for (i = 0; i < n; i++) {
            ans.push(nums[i]);
        }
    }
    return ans;
};