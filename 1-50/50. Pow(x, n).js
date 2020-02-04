/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let isNegative = n < 0 ? true : false;  //n是否为负数
    n = Math.abs(n);
    if (n === 1) {  //幂为1，直接返回x或1/x
        return isNegative ? 1 / x : x;
    }
    let res = 1;
    let cnt = 0;
    let arr = [];
    let currPow = 1;  //当前幂
    for (let num = 1; num < n; num *= 2) {
        cnt++;
    }
    for (let i = 0; i < cnt; i++) {
        currPow *= 2;
        arr.unshift(x);
        x *= x;
    }
    if (currPow !== 1) {
        currPow /= 2;
    }
    for (let i of arr) {
        while (n >= currPow) {
            n -= currPow;
            res *= i;
        }
        currPow /= 2;
        if (n === 0) {
            break;
        }
    }
    if (isNegative) {
        return 1 / res;
    }
    return res;
};