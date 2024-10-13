/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // stack of lesser temp-indeces?
    temperatures.forEach((temp, index) => {
        while (stack.length > 0 && temp > stack[stack.length - 1].temp) {
            const stackTop = stack.pop();
            result[stackTop.index] = index - stackTop.index;
        }
        stack.push({ temp, index }); // insert to stack at each step of the iteration
    })
    return result;
};