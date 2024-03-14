/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = strs[0];
    for (let i = 0; i < strs.length; i++) {
        // find common prefix index
        let commonPrefixIndex = -1;
        const currentStr = strs[i]
        for (let j = 0; j < Math.min(currentStr.length, commonPrefix.length); j++) {
            if (commonPrefix[j]!== currentStr[j]){
                break;
            }
            else {
                commonPrefixIndex++; 
            }
        }
        commonPrefix = commonPrefixIndex >= 0? commonPrefix.substring(0, commonPrefixIndex + 1) : "";
        if (commonPrefix.length === 0) return commonPrefix;
    }
    return commonPrefix;
};