/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const answer = new Array(nums.length).fill(1);
    // calculate left product starting index 1
    for (let i = 1; i < nums.length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1]
    }
    // calculate right product starting at index len-2
    let rightProduct = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        rightProduct = rightProduct * nums[i + 1]
        answer[i] *= rightProduct
    }
    return answer;
};