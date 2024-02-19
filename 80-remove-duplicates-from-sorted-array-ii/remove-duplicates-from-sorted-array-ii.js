/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const numsLength = nums.length;
    if (numsLength <= 2) return numsLength;
    let currentValidIndex = 1;
    // start checking from index 2, since numsLength will be atleast 3 when control reaches here
    let i = 2;
    while (i < nums.length) {
        // move currentValidIndex only when nums[i] not same as value at currentValidIndex && currentValidIndex - 1
        if (nums[i] !== nums[currentValidIndex] || (nums[i] === nums[currentValidIndex] && nums[i] !== nums[currentValidIndex - 1])) {
            currentValidIndex++;
            nums[currentValidIndex] = nums[i]
        }
        i++;
    }

    return currentValidIndex + 1;
};