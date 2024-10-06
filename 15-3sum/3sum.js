/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = []
    const sortedNums = [...nums].sort((a, b) => (a - b));
    let i = 0;
    while ( i < sortedNums.length - 2) {
        let [j, k] = [i + 1, sortedNums.length - 1];
        const target = -sortedNums[i];
        while (j < k) {
            const currSum = sortedNums[j] + sortedNums[k]
            if (currSum === target) {
                result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                j++;
                while ((j < k) && (sortedNums[j] === sortedNums[j - 1])) j++;
            } else if (currSum < target) {
                j++;
            } else if (currSum > target) {
                k--;
            }
        }
        i++;
        while ((i < sortedNums.length - 2) && (sortedNums[i] === sortedNums[i - 1])) i++;
    }
    return result;
};