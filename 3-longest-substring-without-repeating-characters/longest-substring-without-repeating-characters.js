/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let [l, r] = [0, 0];
    let seenCharsSet = new Set();
    while (r < s.length){
        if (!seenCharsSet.has(s[r])){
            seenCharsSet.add(s[r]);
            r++;
            maxLen = Math.max(maxLen, seenCharsSet.size);
        }else {
            while (seenCharsSet.has(s[r])){
                seenCharsSet.delete(s[l]);
                l++;
            }
        }
    }
    return maxLen;
}