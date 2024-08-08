/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const sCharCount = new Map();
    const tCharCount = new Map();
    for (let i = 0; i < s.length; i++) {
        sCharCount.set(s[i], ((sCharCount.get(s[i]) ?? 0) + 1));
        tCharCount.set(t[i], ((tCharCount.get(t[i]) ?? 0) + 1));
    }

    for (let char of sCharCount.keys()) {
        if (sCharCount.get(char) !== tCharCount.get(char)) {
            return false;
        }
    }
    return true;
};