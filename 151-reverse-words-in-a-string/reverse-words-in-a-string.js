/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    /** O(n) O(n) solution:  
        // split the words into an array
        // reverse the array
        // traverse this array to find each word(non-empty word after trimming). and upon find it, concat it with the result after a space.
    */
    return s.split(/\s+/)
            .filter(Boolean)
            .reverse()
            .join(" ")
            .trim();
};