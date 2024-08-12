/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const groupsMap = new Map();
    for (let str of strs) {
        const charSetLength = "z".charCodeAt(0) - "a".charCodeAt(0) + 1; // strings consists of only lowercase English letters
        const charCountArray = new Array(charSetLength).fill(0);
        for (let i = 0; i < str.length; i++) {
            charCountArray[str.charCodeAt(i) - "a".charCodeAt(0)] += 1;
        }
        const stringifiedCharCountArray = charCountArray.join("#");
        if (!groupsMap.has(stringifiedCharCountArray)) {
            groupsMap.set(stringifiedCharCountArray, [str]);
        } else {
            groupsMap.get(stringifiedCharCountArray).push(str);
        }
    }
    return [...groupsMap.values()].reverse()
};