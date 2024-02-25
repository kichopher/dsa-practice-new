/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    /** Approach 1: Sorting | O(NlogN) time and constant space
    1) Sort array in descending order
    2) Iterate over the sorted array. As long as the current citation is greater than or equal to the current index (1-indexed), continue the loop. The h-index is the last index that satisfied the condition.
     */
    let hIndex = 0;
    citations.sort((a, b) => b - a);
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            hIndex = i + 1;
        } else break;
    }
    return hIndex;

};