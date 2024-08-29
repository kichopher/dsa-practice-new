/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    /** O(n) time and O(1) memory solution: 
    Calculate and insert prefix in result array first 
    and then calculate postfix, calculate product with prefix and store at each index */

    const result = new Array(nums.length).fill(1); // set default value 1 (1*any = any)

    // calculate prefix for each index (no prefix for index 0):
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    // calculate postfix for each index (no postfix for last index):
    let postfix = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
        result[i] *= postfix;
    }

    return result;
};