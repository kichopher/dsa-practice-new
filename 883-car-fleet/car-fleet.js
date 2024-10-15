/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    /** Time: O(nlogn) for sorting. Space: O(n) */
    const positionSpeedTuples = position.map((pos, index) => [pos, speed[index]]);
    // sort positionSpeedTuples in descending order of position
    positionSpeedTuples.sort((a, b) => (b[0] - a[0]));
    
    const fleetsStack = [];
    const getTimeToReachTarget = ([pos, sp]) => (target - pos) / sp
    positionSpeedTuples.forEach(tuple => {
        if (fleetsStack.length === 0) {
            fleetsStack.push(tuple); return;
        }
        // else insert tuple only if current tuple reaches target after top of stack
        const topOfStack = fleetsStack[fleetsStack.length - 1]
        if (getTimeToReachTarget(tuple) > getTimeToReachTarget(topOfStack)) {
            fleetsStack.push(tuple)
        }
    })
    return fleetsStack.length;
};