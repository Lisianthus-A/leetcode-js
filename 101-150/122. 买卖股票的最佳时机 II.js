/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let res = 0;
    for (let i = 1; i < prices.length; i++) {
        let diff = prices[i] - prices[i - 1];
        res += diff > 0 ? diff : 0;
    }
    return res;
};