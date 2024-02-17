/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // move values in nums1 to the end such that the filler-values are the front
    let moveFromIndex = m - 1;
    let moveToIndex = m + n - 1;
    for (; moveFromIndex >= 0; moveFromIndex--, moveToIndex--) {
        const temp = nums1[moveToIndex];
        nums1[moveToIndex] = nums1[moveFromIndex]
        nums1[moveFromIndex] = temp
    }

    // edge case: either nums1 or nums2 can be empty
    if (n === 0) {
        return;
    } if (m === 0) {
        for (let ix = 0; ix < n; ix++) nums1[ix] = nums2[ix];
        return;
    }
    // control reaches here iff both m and n > 0
    let [p1, p2, resultPointer] = [n, 0, 0]; // n moves where made in nums1 (n === number of filler values === length of nums2)
    // have a pointer p1 at the modified start of values in nums1
    // have a pointer p2 at the beginning of nums2 
    // now determine the smallest values among the two-pointers and insert from the beginning of nums1 array
    // also move the corresponding pointer from where the value was taken
    for (; resultPointer < m + n; resultPointer++) {
        if (p1 > m + n - 1) {
            // p1 is out of bound
            nums1[resultPointer] = nums2[p2];
            p2++;
            continue;
        }
        if (p2 > n - 1) {
            // p2 is out of bound
            nums1[resultPointer] = nums1[p1];
            p1++;
            continue;
        }
        // control reaches here if p1 and p2 are within bounds
        const [val1, val2] = [nums1[p1], nums2[p2]];
        if (val1 <= val2) {
            nums1[resultPointer] = val1;
            p1++;
        } else if (val1 > val2) {
            nums1[resultPointer] = val2;
            p2++;
        }
    }
};