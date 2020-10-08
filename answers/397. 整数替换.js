/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    const helper = (num, count) => {
        if (count >= res) {  //当前替换次数已经不能是最小值了
            return;
        }

        if (num === 1) {
            res = Math.min(res, count);
            return;
        }

        if (num % 2 === 0) {  //偶数
            helper(num / 2, count + 1);
        } else {  //奇数
            helper(num - 1, count + 1);
            helper(num + 1, count + 1);
        }
    }

    let res = Infinity;
    helper(n, 0);
    return res;
};