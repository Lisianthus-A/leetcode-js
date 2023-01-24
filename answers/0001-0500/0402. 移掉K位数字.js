/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (k >= num.length) {
        return '0';
    }

    for (let i = 1; i < num.length && k > 0; i++) {
        while (num[i - 1] > num[i] && k > 0) {  //前面的数比后面的数大，丢弃
            num = num.slice(0, i - 1) + num.slice(i);
            k--;
            i--;
        }
    }

    num = num.replace(/^0+/, '');  //去掉字符串最前面的0

    if (!num) {  //去完0后为空串
        return '0';
    }

    return num.slice(0, num.length - k);  //丢弃掉末尾k位
};