/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Sol 1: time O(n2) space O(1): Have one pointer that takes one step after the other pointer has finished traversing the values to the right of the first pointer.
    // Sol 2: time O(nLogn) space O(n): Create an array or arrays which each element in the array being a tuple of value and original-index. Then sort the arrays based on value at index-0. Now find the right sum with two pointers at either end. Return the indeces.
    // Sol 3: time O(n) space O(n): Maintain a hashMap of seen values and indeces, and look for target-num in the hashMap 
    const seenNumIndeces = new Map();
    for (let i = 0; i< nums.length; i++){
        const num = nums[i];
        const diff = target - num;
        if (seenNumIndeces.has(diff)){
            return [seenNumIndeces.get(diff), i]
        }
        seenNumIndeces.set(num, i)
    }
};