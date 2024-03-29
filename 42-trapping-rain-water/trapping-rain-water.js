/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let [left ,right] = [0, height.length - 1];
    let [maxLeft, maxRight] = [0, 0];
    let result = 0;

    while (left < right){
        if (height[left] <= height[right]){
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            }else{
                result += maxLeft - height[left]
            }
            left++;
        }else{
            if (height[right] >= maxRight){
                maxRight = height[right];
            }else {
                result += maxRight - height[right];
            }
            right--;
        }
    }

    return result;
};