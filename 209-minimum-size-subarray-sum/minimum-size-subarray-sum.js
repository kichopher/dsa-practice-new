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
    let minLength = Infinity;
    let leftPointer = 0;
    let rightPointer = 0;
    const getWindowLength = () => rightPointer - leftPointer + 1;
    let sum = 0;
    for (; rightPointer < nums.length; rightPointer++) {
        sum += nums[rightPointer];
        while (sum >= target) {
            minLength = Math.min(minLength, getWindowLength());
            sum -= nums[leftPointer];
            leftPointer++;
        }
    }
    return minLength > nums.length ? 0 : minLength;
};