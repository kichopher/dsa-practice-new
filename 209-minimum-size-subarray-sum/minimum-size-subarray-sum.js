/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    /** Sliding window. O(n) time and O(1) space
    Expand the sum window until target is reached or exceeded,
    then shrink the window from the left until the target is satisfied and update minLength.
    The logic that the shortest window that satisfies the target-sum will be inside a longer window that satisfies the target-sum */
    let minLength = 0;
    let leftPointer = 0;
    let sum = 0;
    for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
        sum += nums[rightPointer];
        while (sum >= target) {
            const currentWindowLength = rightPointer - leftPointer + 1
            minLength = minLength === 0 ? currentWindowLength : Math.min(minLength, currentWindowLength);
            sum -= nums[leftPointer];
            leftPointer++;
        }
    }
    return minLength;
};