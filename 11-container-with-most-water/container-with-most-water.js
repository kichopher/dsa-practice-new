/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let [l, r] = [0, height.length - 1];
    let maxArea = 0;
    while (l < r) {
        const [hl, hr] = [height[l], height[r]]
        const currentArea = (r - l) * Math.min(hl, hr);
        maxArea = Math.max(maxArea, currentArea);
        if (hl <= hr) {
            l++;
        } else {
            r--;
        }
    }
    return maxArea;
};