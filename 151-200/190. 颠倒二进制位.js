/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let num = 2 ** 31;
    let arr = [];  //二进制所有位的值
    while (num !== 0.5) {
        if (n >= num) {
            arr.push(1);
            n -= num;
        } else {
            arr.push(0);
        }
        num /= 2;
    }

    return parseInt(arr.reverse().join(''), 2);
};