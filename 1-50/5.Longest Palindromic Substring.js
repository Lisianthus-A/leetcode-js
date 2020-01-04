/**
 * @param {string} s
 * @return {string}
 */
const isPali = str => str === str.split('').reverse().join('');  //判断字符串是否回文

var longestPalindrome = function(s) {
    let len = s.length;
    if (len <= 1) {  //考虑边界
        return s;
    }
    let maxStr = s[0];  //最长字符串
    for (let i = 2; i < len + 1; i++) {  //寻找长度为i的回文
        for (let j = 0; j < len + 1 - i; j++) {
            let tempStr = s.substring(j, j + i);
            if (isPali(tempStr)) {  //找到长度为i的回文
                maxStr = tempStr;
                break;
            }
        }
    }
    return maxStr;
};