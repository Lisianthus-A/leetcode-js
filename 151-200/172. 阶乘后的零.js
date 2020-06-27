/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if (n < 5) {
        return 0;
    }

    return parseInt(n / 5) + trailingZeroes(parseInt(n / 5));
};