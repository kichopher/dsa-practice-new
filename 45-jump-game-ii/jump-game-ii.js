/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let jumps = 0;
    let [currentJumpEnd, farthest] = [0, 0]; // left and right boundary of current window
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currentJumpEnd) {
            jumps++;
            currentJumpEnd = farthest;
        }
    }
    return jumps;
};
