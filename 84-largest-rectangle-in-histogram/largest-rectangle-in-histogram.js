/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0;
    const stack = []; // stack of tuples of height and start-index [h, si]
    heights.forEach((height, index) => {
        let startIndex = index;
        while (stack.length && stack[stack.length - 1][0] > height) {
            const [stackTopHeight, stackTopIndex] = stack.pop();
            maxArea = Math.max(maxArea, (index - stackTopIndex) * stackTopHeight);
            startIndex = stackTopIndex
        }
        stack.push([height, startIndex]);
    })

    while (stack.length) {
        const [stackTopHeight, stackTopIndex] = stack.pop();
        maxArea = Math.max(maxArea, (heights.length - stackTopIndex) * stackTopHeight)
    }
    return maxArea;
};