/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // Trim the input string and split it into words
    const words = s.trim().split(" ");

    // Return the length of the last word
    return words[words.length - 1].length;
};