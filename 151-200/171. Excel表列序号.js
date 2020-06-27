/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let arr = s.split('');
    let num = 26 ** (arr.length - 1);
    let res = 0;
    for (let i of arr) {
        res += num * (i.charCodeAt() - 64);
        num /= 26;
    }
    return res;
};