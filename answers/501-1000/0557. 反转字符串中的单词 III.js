/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const strArr = s.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].split('').reverse().join('');
    }
    return strArr.join(' ');
};