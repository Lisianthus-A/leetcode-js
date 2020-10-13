/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    num1 = num1.split('');
    num2 = num2.split('');

    const maxLen = Math.max(num1.length, num2.length);
    //为长度小的数组前补0
    if (num1.length < maxLen) {
        const dif = maxLen - num1.length;
        for (let i = 0; i < dif; i++) {
            num1.unshift(0);
        }
    } else if (num2.length < maxLen) {
        const dif = maxLen - num2.length;
        for (let i = 0; i < dif; i++) {
            num2.unshift(0);
        }
    }

    //逐项相加
    for (let i = 0; i < maxLen; i++) {
        num1[i] = +num1[i] + +num2[i];
    }

    //处理超过10的项
    for (let i = num1.length - 1; i >0; i--) {
        if (num1[i] >= 10) {
            num1[i] -= 10;
            num1[i - 1] += 1; 
        }
    }
    return num1.join('');
};