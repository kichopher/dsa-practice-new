/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const getResult = (a, b, op) => {
        switch (op) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "/":
                return Math.trunc(a / b);
            default:
                return a * b;

        }
    }
    const setOfOps = new Set(["+", "-", "*", "/"])
    const operandsStack = [];
    tokens.forEach(token => {
        if (setOfOps.has(token)) {
            const b = operandsStack.pop();
            const a = operandsStack.pop();
            operandsStack.push(getResult(a, b, token))
        } else {
            operandsStack.push(Number(token))
        }
    })
    return operandsStack.pop()
};
