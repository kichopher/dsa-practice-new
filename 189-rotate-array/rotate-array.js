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
        const rangeLength = endIx - startIx + 1;
        const numberOfMovesRequired = Math.trunc(rangeLength/2);
        for (let i = 0; i < numberOfMovesRequired; i++) {
            const temp = arr[startIx + i];
            arr[startIx + i] = arr[endIx - i];
            arr[endIx - i] = temp;
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