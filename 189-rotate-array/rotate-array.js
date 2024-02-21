/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // O(n) time and O(1) space approach:
    // 1. Reverse the entire array
    // 2. Reverse the first k elements
    // 3. Reverse the remaining elements
    function reverseArrayRange(arr, startIx, endIx) {
        while (startIx < endIx){
            const temp = arr[endIx];
            arr[endIx] = arr[startIx];
            arr[startIx] = temp;
            startIx++; endIx--;
        }
    }
    const kActual = k % nums.length; // this corrects for when k >= nums.length
    if (kActual === 0) return; // this removes the edge cases that can mess up steps 2 and 3
    /** 1 */
    reverseArrayRange(nums, 0, nums.length - 1);
    /** 2 */
    reverseArrayRange(nums, 0, kActual - 1);
    /** 3 */
    reverseArrayRange(nums, kActual, nums.length - 1);
};