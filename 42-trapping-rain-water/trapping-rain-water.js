/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const maxToLeft = Array(height.length).fill(0)
    const maxToRight = Array(height.length).fill(0)
    for (let i = 1; i < height.length; i++) {
        const [l, r] = [i, (height.length - 1) - i];
        maxToLeft[l] = Math.max(maxToLeft[l - 1], height[l - 1])
        maxToRight[r] = Math.max(maxToRight[r + 1], height[r + 1])
    }
    let water = 0;
    height.forEach((h, ix)=>{
        water += Math.max(Math.min(maxToLeft[ix], maxToRight[ix]) - h, 0)
    })
    return water;
};