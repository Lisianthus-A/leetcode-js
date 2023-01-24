/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num = num.toString().split('');
    while (num.length !== 1) {
        num = num.reduce((a, b) => a + +b, 0).toString().split('');
    }
    return +num[0];
};