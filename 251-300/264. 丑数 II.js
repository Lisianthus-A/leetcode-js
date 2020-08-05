/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let dp = [1];
    let p2 = p3 = p5 = 0;
    while (dp.length < n) {
        let num = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
        dp.push(num);
        num === dp[p2] * 2 ? p2++ : null;
        num === dp[p3] * 3 ? p3++ : null;
        num === dp[p5] * 5 ? p5++ : null;
    }
    return dp.pop();
};