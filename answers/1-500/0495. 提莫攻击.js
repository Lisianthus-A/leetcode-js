/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let res = 0;
    for (let i = 0; i < timeSeries.length; i++) {
        const dif = timeSeries[i + 1] - timeSeries[i];
        res += (dif > duration || isNaN(dif)) ? duration : dif;
    }

    return res;
};