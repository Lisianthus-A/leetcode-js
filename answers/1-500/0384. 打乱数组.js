/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    if (n <= 4) {
        return [0, 0, 1, 2, 4][n];
    }
    let res = 1;
    while (n > 4) {
        n -= 3;
        res *= 3;
    }
    return res * n;
};