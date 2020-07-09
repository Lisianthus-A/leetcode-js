/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let arr = [];
    while (true) {
        if (n === 1) {
            return true;
        }
        if (arr.indexOf(n) !== -1) {
            return false;
        }
        arr.push(n);
        n = ('' + n).split('').reduce((a, b) => a + b ** 2, 0);
    }
};