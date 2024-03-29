/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    /** With sorting
    time - O(n^2), space - O(n)
    https://leetcode.com/problems/3sum/solutions/281302/javascript-with-lots-of-explanatory-comments
    */
    const results = [];
    const target = 0;
    nums.sort((a, b) => a - b); // sort array
    let i = 0;
    while (i < nums.length - 2) {
        while (i > 0 && nums[i] === nums[i - 1]) i++;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                results.push([nums[i], nums[j], nums[k]]);
                while (nums[j + 1] === nums[j]) j++;
                while (nums[k - 1] === nums[k]) k--;
                j++; k--;
            } 
            else if (sum < target) j++
            else if (sum > target) k--
        }
        i++;
    }
    return results;
};