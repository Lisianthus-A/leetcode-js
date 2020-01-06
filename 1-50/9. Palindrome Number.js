/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //将输入数组转为字符串，比较reverse之后的字符串是否相同
    return x.toString() === x.toString().split('').reverse().join('');
};