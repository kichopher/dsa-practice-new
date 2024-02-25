/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    // Greedy approach: O(n) time and O(1) space
    const length = gas.length;
    let totalGas = 0;
    let totalCost = 0;
    let startIndex = 0;
    let tankBal = 0;
    for (let i = 0; i < length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tankBal += gas[i] - cost[i];
        if (tankBal < 0) {
            tankBal = 0;
            startIndex = i + 1;
        }
    }
    return totalCost > totalGas ? -1 : startIndex;
};