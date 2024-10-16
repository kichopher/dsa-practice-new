/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    if (position.length === 0) return 0;
    
    const positionSpeeds = position.map((pos, i) => ([pos, speed[i]]))
    positionSpeeds.sort((a, b) => a[0] - b[0]); // increasing order of positions

    let lastFleet = positionSpeeds.pop();
    let fleetCount = 1;

    while (positionSpeeds.length) {
        const currentCar = positionSpeeds.pop();
        const getTimeToTarget = ([pos, sp]) => ((target - pos) / sp);
        if (getTimeToTarget(currentCar) > getTimeToTarget(lastFleet)) {
            lastFleet = currentCar;
            fleetCount += 1;
        }
    }

    return fleetCount;
};