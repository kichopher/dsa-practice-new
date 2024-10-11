/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    const growSequence = (openN, closedN, sequence) => {
        if (closedN === n) {
            result.push(sequence)
        } else {
            // add open-brace
            if (openN < n) {
                growSequence(openN + 1, closedN, sequence + "(")
            }
            // add closed-brace
            if (openN > closedN) {
                growSequence(openN, closedN + 1, sequence + ")")
            }
        }
    }
    growSequence(0, 0, "");
    return result;
};