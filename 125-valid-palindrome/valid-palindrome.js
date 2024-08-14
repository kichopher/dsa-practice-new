/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let t = "";
    for (let i = 0; i < s.length; i++) {
        const currCharCode = s.charCodeAt(i);
        const charCodeSmallA = "a".charCodeAt(0);
        const charCodeSmallZ = "z".charCodeAt(0);
        const charCodeBigA = "A".charCodeAt(0);
        const charCodeBigZ = "Z".charCodeAt(0);
        if (currCharCode >= charCodeSmallA && currCharCode <= charCodeSmallZ) {
            t += s[i];
        } else if (currCharCode >= charCodeBigA && currCharCode <= charCodeBigZ) {
            t += s[i].toLowerCase();
        } else if (currCharCode >= "0".charCodeAt(0) && currCharCode <= "9".charCodeAt(0)) {
            t += s[i];
        }
    }
    let [l, r] = [0, t.length - 1];
    while (l < r) {
        if (t[l] !== t[r]) {
            return false;
        }
        l++; r--;
    }
    return true;
};