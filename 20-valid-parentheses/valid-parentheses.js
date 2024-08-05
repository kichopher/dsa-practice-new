/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const openToClose = new Map();
    openToClose.set("(", ")");
    openToClose.set("{", "}");
    openToClose.set("[", "]");
    const stackOfOpeningBraces = [];
    for (i = 0; i < s.length; i++) {
        const char = s[i];
        if (openToClose.has(char)) {
            // is opening bracket
            stackOfOpeningBraces.push(char)
        } else {
            // is closing bracket (find pair in stack)
            const poppedOpeningBracket = stackOfOpeningBraces.pop();
            if (openToClose.get(poppedOpeningBracket) === char) {
                continue;
            } else { return false; }
        }
    }
    return stackOfOpeningBraces.length ? false : true;
};