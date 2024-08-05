/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uip = 0; // unique index pointer
    for (let i = 1; i < nums.length; i++){
        if (nums[uip]!==nums[i]){
            // unique number found
            uip += 1;
            nums[uip] = nums[i];
        }
    }
    return uip+1;
};