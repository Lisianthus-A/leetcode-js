/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let sum = 0, start = 0, oil = 0;
    for (let i = 0; i < gas.length; i++) {
        sum += gas[i] - cost[i];
        oil += gas[i] - cost[i];
        if (oil < 0) {
            start = i + 1;
            oil = 0;
        }
    }
    return sum >= 0 ? start : -1;
};