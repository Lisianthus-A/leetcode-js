/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    if (num <= 0) {
        return false;
    }
    while (true) {
        if (num === 1 || num === 2 || num === 3 || num === 5) {
            return true;
        }
        let temp = 0;
        !(num % 2) ? num /= 2 : temp++;
        !(num % 3) ? num /= 3 : temp++;
        !(num % 5) ? num /= 5 : temp++;

        if (temp === 3) {
            return false;
        }
    }
};