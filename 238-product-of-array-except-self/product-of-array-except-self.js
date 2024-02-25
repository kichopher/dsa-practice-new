/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    const answer = new Array(n);
    // answer[i] initially is set to the product of every number to the left of i
    answer[0] = 1;
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }
    // at this point answer[n-1] will be the correct value

    // R is the product of every number to the right of i
    let R = 1;
    for (let i = n - 2; i >= 0; i--) {
        R *= nums[i + 1];
        answer[i] *= R;
    }
    return answer;
};