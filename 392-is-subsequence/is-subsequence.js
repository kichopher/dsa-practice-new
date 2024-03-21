/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) return true;
    if (s.length > t.length) return false;

    let sp = -1;
    for (let i=0; i<t.length; i++){
        if(t[i]===s[sp+1]) sp++;
        if (sp === s.length-1) return true;
    }
    return false;
};