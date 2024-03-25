/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    /** Have two pointers one at start and one at the end
    calculate the sum and take a step based on the sum
    if sum is equal to target, return the result
    if sum is less than target, move left pointer one-step to right
    if sum is greater than target, move right pointer one-step to the left */
    let sp = 0;
    let ep = numbers.length- 1;
    while (sp < ep){
        const currentSum = numbers[sp] + numbers [ep];
        if (currentSum === target){
            return [sp+1, ep+1];
        }else if (currentSum < target){
            sp++; continue;
        }else {
            /** currentSum > target */
            ep--; continue;
        }
    }
};