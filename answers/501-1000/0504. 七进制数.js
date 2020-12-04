/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) {
        return '0';
    }

    let n = 1;
    const flag = num > 0 ? true : false;
    num = Math.abs(num);
    while (n * 7 <= num) {
        n *= 7;
    }

    const res = [];
    let i = 1000;
    while (n >= 1 && i--) {
        const div = parseInt(num / n);
        num -= div * n;
        n /= 7;
        res.push(div);
    }

    return flag ? res.join('') : '-' + res.join('');
};