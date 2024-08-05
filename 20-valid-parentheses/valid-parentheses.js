/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const setOfClosingBraces = new Set([")", "}", "]"]);
    const mapOfOpeningBracesToTheirClosingBraces = new Map();
    mapOfOpeningBracesToTheirClosingBraces.set("(", ")");
    mapOfOpeningBracesToTheirClosingBraces.set("{", "}");
    mapOfOpeningBracesToTheirClosingBraces.set("[", "]");
    const stackOfOpeningBraces = [];
    for (i = 0; i < s.length; i++) {
        const char = s[i];
        if (mapOfOpeningBracesToTheirClosingBraces.has(char)) {
            // is opening bracket
            stackOfOpeningBraces.push(char)
        } else {
            // is closing bracket (find pair in stack)
            const poppedOpeningBracket = stackOfOpeningBraces.pop();
            if (mapOfOpeningBracesToTheirClosingBraces.get(poppedOpeningBracket) === char) {
                continue;
            } else { return false; }
        }
    }
    return stackOfOpeningBraces.length ? false : true;
};