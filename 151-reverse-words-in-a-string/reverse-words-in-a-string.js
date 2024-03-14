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
    const reversedWordsArray = s.split(" ").reverse();
    reversedWordsArray.forEach((word, index) => {
        reversedWordsArray[index] = word.trim();
    })
    let result = "";
    reversedWordsArray.forEach(word => {
        if (word.length > 0) {
            result += result.length === 0 ? word : ` ${word}`;
        }
    })
    return result;
};