/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxAr = 0;
    let sp = 0;
    let ep = height.length - 1;
    while (sp < ep){
        const currentArea = Math.min(height[sp], height[ep]) * (ep - sp);
        maxAr = Math.max(maxAr, currentArea);
        /** move the minimum side */
        if (height[sp] < height[ep]) {
            sp++; continue;
        } else {
            ep--; continue;
        }
    }
    return maxAr;
};