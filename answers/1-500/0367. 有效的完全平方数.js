/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for (let i = 1; ; i += 2) {
        num -= i;
        if (num === 0) {
            return true;
        } else if (num < 0) {
            return false;
        }
    }
};