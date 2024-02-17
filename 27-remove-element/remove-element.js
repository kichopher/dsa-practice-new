/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let valCount = 0;
    let notValIndex = 0;
    let i = 0;
    while (i < nums.length) {
        const currentValue = nums[i];
        if (currentValue === val){
            valCount++;
        } else {
            nums[notValIndex] = currentValue
            notValIndex++
        }
        i++;
    }

    const k = nums.length - valCount;
    return k;
};