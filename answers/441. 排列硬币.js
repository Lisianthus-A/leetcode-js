/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i = 1;
    while (true) {
        if (n < i) {
            return i - 1;
        }
        n -= i++;
    }
};