/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const i = haystack.indexOf(needle) ?? -1
    return i;
}