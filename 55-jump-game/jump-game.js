/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length === 1) return true;
    // Approach: traverse the array from last index to find the nearest index towards the start to reach it from
    let indexToReach = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        const jumpsRequired = indexToReach - i;
        if (nums[i] >= jumpsRequired) {
            // jump is possible from current index
            // now update indexToReach to current index and try to find if reaching this index is possible in the subsequent interations
            indexToReach = i;
        }
    }
    return indexToReach === 0 ? true : false;
};