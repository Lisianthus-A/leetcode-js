/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const INT_MAX = Math.pow(2, 31) - 1;  //最大值
    const INT_MIN = -Math.pow(2, 31);  //最小值
    let negativeFlag = x < 0 ? true : false;  //是否负数
    let ret = parseInt(x.toString().split('').reverse().join(''));
    if (negativeFlag) {
        ret = -ret;
    }
    if (ret > INT_MAX || ret < INT_MIN) {
        return 0;
    }
    return ret;
};