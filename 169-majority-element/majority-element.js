/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Approach 1: NlogN time and constant space -> sort the array and check which number appears in more that half (from start or end)
    /** Approach 2: 
    Create a Map (not using object because keys can't be number in js-object) to keep track of count of each unique number
    After traversing nums, and updating the number-count Map, traverse the number-count Map to find the number with count > n/2
    Time complexity: O(n) [array traversal]
    Space complexity: O(1) [Since 1<= n <= 5 * 10^4, There will only be atmost 5*10^4 unique numbers, so the Map will have a size proportional to to 5*10^4 atmost]
     */
    const numCountMap = new Map();
    nums.forEach(num=>{
        const currentNumCount = numCountMap.get(num); // returns undefined if num not present
        if (!currentNumCount){
            numCountMap.set(num, 1)
        }else{
            numCountMap.set(num, currentNumCount + 1);
        }
    })
    let majorityElement;
    numCountMap.forEach((value, num)=> {
        if (value > (nums.length/2)) majorityElement = num;
    })
    return majorityElement;
};