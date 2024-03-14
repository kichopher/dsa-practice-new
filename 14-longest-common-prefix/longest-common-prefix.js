/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // Optimal solution: Vertical scanning O(n*m) time and O(1) space
    let commonPrefix = "";
    let indexToCheck = 0;
    while (strs.length >= 1 && strs[0].length >= indexToCheck + 1) {
        const currentCharToCheck = strs[0][indexToCheck]
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][indexToCheck] !== currentCharToCheck) {
                return commonPrefix;
            }
        }
        // control reaches here if currentIndex matches all strs
        commonPrefix += currentCharToCheck
        indexToCheck++
    }
    return commonPrefix;
};