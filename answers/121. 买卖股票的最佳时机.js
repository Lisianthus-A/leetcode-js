/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let arr = [];
    while (prices[0] !== undefined) {
        let num = prices.shift();
        arr.push(Math.max(...prices) - num);
    }
    let max = Math.max(...arr);
    return max > 0 ? max : 0;
};