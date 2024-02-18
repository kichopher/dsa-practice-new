/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // duplicates will occur together in a sorted array
    const numsLength = nums.length;
    if (numsLength <= 1) return numsLength;
    // start from the second element
    let currentUniqueNumberIndex = 0;
    for (let i=1; i< numsLength; i++) {
        if (nums[currentUniqueNumberIndex] === nums[i]){
            continue;
        }else {
            currentUniqueNumberIndex++;
            nums[currentUniqueNumberIndex] = nums[i];
        }
    }
    return currentUniqueNumberIndex + 1;
};