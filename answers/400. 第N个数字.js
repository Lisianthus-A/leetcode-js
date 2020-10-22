/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let num = 1;  //当前数字范围内的数字由几个数组成
    let count = 9;  //当前数字范围内一共有几个数
    while (true) {
        if (n > num * count) {
            n -= num * count;
            num++;
            count *= 10;
        } else {
            const divisor = parseInt(n / num);  
            const remainder = n % num;
            const targetNumber = count / 9 - 1 + divisor;
            return remainder > 0 ? (targetNumber + 1).toString()[remainder - 1] : targetNumber.toString().slice(-1);
        }
    }
};