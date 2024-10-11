/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // items are indeces of lesser temperatures
    temperatures.forEach((temp, index) => {
        if (stack.length === 0) {
            stack.push({ temp, index })
            return;
        }
        // else
        // insert to stack if current temp is less than or equal to temp of top of stack
        const peekStackTop = () => stack[stack.length - 1]
        if (temp <= peekStackTop().temp) {
            stack.push({ temp, index })
        } else { // temp > peekStackTop
            while (stack.length && peekStackTop().temp < temp) {
                const stackTop = stack.pop()
                result[stackTop.index] = index - stackTop.index
            }
            stack.push({ temp, index })
        }
    })
    return result;
};