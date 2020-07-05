/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
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

    let res = 0;
    for (let i of arr) {
        res += i === 1 ? 1 : 0;
    }

    return res;
};