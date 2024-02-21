/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // approach-1 O(n) space and time, create an temp-array to arrange all numbers in the correct order and finally copy values to the nums array
    const tempArray = [];
    tempArray.length = nums.length;
    for (let i=0; i<nums.length; i++){
        const targetIndex = (i + k) % nums.length;
        tempArray[targetIndex] = nums[i];
    }
    // now copy values from tempArray to nums array
    for (let i=0; i<nums.length; i++){
        nums[i] = tempArray[i];
    }  
};