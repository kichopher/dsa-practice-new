/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const matchedChars = s.match(/[A-Z0-9]/gi) || []; // could be empty if no match found
    const processedString = matchedChars.reduce((acc, curr) => (acc + curr.toLowerCase()), "");
    // console.log([processedString])
    let sp = 0;
    let ep = processedString.length - 1;
    while (sp < ep) {
        if (processedString[sp] === processedString[ep]) {
            sp++; ep--;
            continue;
        } else {
            return false;
        }
    }
    return true;
};