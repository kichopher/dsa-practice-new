/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    /** Solving with Booyer Moore Algorith 
        Worst case time complexity is O(mn) but average time complexity is O(n)
     */
    // preprocess needle (record last occurence of each character in needle)
    const last = {};
    for (let i = 0; i < needle.length; i++) last[needle[i]] = i;

    let haystack_start_index = 0;
    while (haystack_start_index + needle.length - 1 <= haystack.length - 1) {
        /** start comparing from the end
         If mismatch found, re-calculate haystack_start_index  */
        for (let i = needle.length - 1; i >= 0; i--) {
            const hp = haystack_start_index + i
            if (i === 0 && needle[i] === haystack[hp]) return haystack_start_index;
            if (needle[i] !== haystack[hp]) {
                /** determine the new haystack_start_index */
                if (last.hasOwnProperty(haystack[hp])) {
                    const lastNeedleCharIndex = last[haystack[hp]];
                    const moves = i - lastNeedleCharIndex
                    haystack_start_index += Math.max(1, moves);
                    break;
                }
                /** else skip till past this index */
                haystack_start_index = hp + 1;
                break;
            }
        }
    }
    return -1;
}
