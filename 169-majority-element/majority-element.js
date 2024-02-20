/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // implement Boyer-Moore algorithm for O(n) time and O(1) space
    let majorityElement = nums[0];
    let count = 1;
    // find candidate
    for(let i = 1; i< nums.length; i++ ){
        if (nums[i] !== majorityElement) count--;
        else count++;

        if (count === 0) {
            majorityElement = nums[i];
            count=1;
        }
    }
    // verify if candidate is majorityElement
    let candidateCount = 0;
    for(let i = 0; i< nums.length; i++){
        if (nums[i] === majorityElement) candidateCount++;
    }
    return (candidateCount > (nums.length/2)) ? majorityElement : null;
};