/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trimEnd();  //去末尾的空格
    let regexStr = s.match(/\w+$/);
    return regexStr ? regexStr[0].length : 0;
};