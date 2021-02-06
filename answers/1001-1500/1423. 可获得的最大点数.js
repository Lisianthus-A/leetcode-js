/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += cardPoints[i];
    }

    let res = sum;
    for (let i = 0; i < k; i++) {
        sum -= cardPoints[k - i - 1];
        sum += cardPoints[cardPoints.length - 1 - i];
        res = Math.max(res, sum);
    }

    return res;
};