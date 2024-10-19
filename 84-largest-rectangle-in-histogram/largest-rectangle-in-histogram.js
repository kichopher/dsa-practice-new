/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0;
    const stack = []; // stores tuples that mentions the height and its beginning index [h, i]
    heights.forEach((height, index) => {
        if (stack.length === 0) {
            stack.push([height, 0]);
            return;
        }
        const getStackTop = () => stack[stack.length - 1]
        if (getStackTop()[0] > height) {
            let poppedStackTopIndex;
            while (stack.length && getStackTop()[0] > height) {
                // pop & calculate area
                const [stackTopHeight, stackTopIndex] = stack.pop();
                poppedStackTopIndex = stackTopIndex;
                const currArea = (index - stackTopIndex) * stackTopHeight
                maxArea = Math.max(maxArea, currArea)
            }
            stack.push([height, stack.length === 0 ? 0 : poppedStackTopIndex])
        } else {
            stack.push([height, index])
        }
    })

    while (stack.length){
        const [stackTopHeight, stackTopIndex] = stack.pop();
        const currArea = (heights.length - stackTopIndex) * stackTopHeight;
        maxArea = Math.max(maxArea, currArea)
    }

    return maxArea;
};