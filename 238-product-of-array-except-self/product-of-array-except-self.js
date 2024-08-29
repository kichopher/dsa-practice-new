/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // O(n) time and O(n) memory solution: Calculate prefix array and postfix array and then multiply
    const prefixes = new Array(nums.length).fill(1); // set default value 1 (1*any = any)
    const postfixes = new Array(nums.length).fill(1);

    // calculate prefix for each index (no prefix for index 0):
    for (let i = 1; i < nums.length; i++) {
        prefixes[i] = prefixes[i - 1] * nums[i - 1];
    }

    // calculate postfix for each index (no postfix for last index):
    for (let i = nums.length - 2; i >= 0; i--) {
        postfixes[i] = postfixes[i + 1] * nums[i + 1];
    }

    const result = [];
    prefixes.forEach((prefix, i) => { result.push(prefix * postfixes[i]) });
    return result;
};