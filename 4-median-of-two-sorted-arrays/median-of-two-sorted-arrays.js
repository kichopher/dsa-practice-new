/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // Make sure nums1 is the smaller array
    const [m, n] = [nums1.length, nums2.length];
    if (m > n) {
        return findMedianSortedArrays(nums2, nums1)
    }
    const medL = Math.floor((m + n) / 2); // approx. number of items till median for boundary calculation.
    // median found if, 
    // left_of_nums1_boundary < right_of_nums2_boundary 
    // && left_of_nums2_boundary < right_of_num1_boundary
    let [n1l, n1r] = [0, m]; // m inclusive, since boundary can lie outside nums1
    while (n1l <= n1r) {
        const n1b = Math.floor((n1l + n1r) / 2);
        const n2b = medL - n1b;
        const lofn1b = (n1b - 1) >= 0 ? nums1[n1b - 1] : -Infinity;
        const rofn1b = n1b === m ? Infinity : nums1[n1b];
        const lofn2b = (n2b - 1) >= 0 ? nums2[n2b - 1] : -Infinity;
        const rofn2b = n2b === n ? Infinity : nums2[n2b]; // important for case num1: [1001] & num2: [1000]
        if (lofn1b <= rofn2b && lofn2b <= rofn1b) {
            // boundary is at median
            // calculate and return median
            if ((m + n) % 2 === 0) {
                return ((Math.max(lofn1b, lofn2b) + Math.min(rofn1b, rofn2b)) / 2)
            } // else
            return (Math.min(rofn1b, rofn2b))
        } else if (lofn1b > rofn2b) {
            // search in lower half
            n1r = n1b - 1;
            continue;
        } else {
            // search in upper half
            n1l = n1b + 1;
            continue;
        }
    }
};