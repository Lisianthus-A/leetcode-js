/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === 0) {  //除数为0
        return 0;
    }
    let level = 1;  //除数的放大倍数
    //let count = 0;  //放大次数
    let res = 0;
    let isNegative = false;  //是否负数
    if (dividend < 0 && divisor > 0) {
        isNegative = true;
    } else if (dividend > 0 && divisor < 0) {
        isNegative = true;
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let temp = divisor;
    while (dividend >= temp) {
        while (dividend >= divisor) {
            if (divisor < 1073741824) {  //确保不溢出
                level <<= 1;  //放大1倍
                divisor <<= 1;  //放大1倍
            } else {  //防止死循环，让被除数减去除数
                break;
            }
        }
        if (level !== 1) {  //确保除数被放大过
            divisor >>= 1;
            level >>= 1;
        }
        if (dividend >= divisor) {
            dividend -= divisor;
            res += level;
        }
    }
    //结果溢出处理
    if (isNegative && res >= 2147483648) {
        return -2147483648;
    } else if (res >= 2147483647) {
        return 2147483647;
    }
    if (isNegative) {
        return -res;
    }
    return res;
};