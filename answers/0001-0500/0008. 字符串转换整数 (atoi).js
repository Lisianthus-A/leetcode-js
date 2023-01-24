/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    let numStr = str.match(/\d+/);  //数字字符串
    if (numStr === null) {  //没有找到数字
        return 0;
    }
    if (str.trim()[0] === '-' || str.trim()[0] === '+') {  //第一个非空字符是-或+
        numStr = str.trim()[0] + numStr;
        if (/[^0-9]/.test(str.trim()[1])) {  //下一个字符不是0-9
            return 0;
        }
    } else if (/[^0-9+-]/.test(str.trim()[0])) {  //第一个非空字符不是0-9和-+
        return 0;
    }
    if (parseInt(numStr) > INT_MAX)  {
        return INT_MAX;
    } else if (parseInt(numStr) < INT_MIN) {
        return INT_MIN;
    }
    return parseInt(numStr);
};