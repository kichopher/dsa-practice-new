/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let farthest = 0;
    for (let i = 0; i < nums.length - 1; i++) { /** Skip checking the last index, since no jump can be made from there */
        farthest = Math.max(farthest, i + nums[i]);
        if (nums[i] === 0 && i === farthest) break;
    }
    return farthest < nums.length - 1 ? false : true;
};