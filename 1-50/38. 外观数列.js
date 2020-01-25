/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return '1';
    } else {
        let str = countAndSay(n - 1);  //上一个外观数
        let res = '';  //结果
        let num = 0;  //数字重复个数
        let char = str[0];  //现在比较的数字
        for (let i of str) {
            if (char === i) {
                num++;
            } else {
                res += num.toString();
                res += char;
                num = 1;
                char = i;
            }
        }
        res += num.toString();
        res += char;
        return res;
    }
};