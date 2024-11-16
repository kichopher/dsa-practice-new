/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const charIndexMap = new Map();
    let longestLength = 0;
    let [i, j] = [0, 0];
    while (j < s.length) {
        const currChar = s[j]
        if (charIndexMap.has(currChar) && charIndexMap.get(currChar) >= i) {
            i = charIndexMap.get(currChar) + 1;
        }
        longestLength = Math.max(longestLength, j - i + 1);
        // for next iteration
        charIndexMap.set(currChar, j);
        j++;
    }
    return longestLength;
}