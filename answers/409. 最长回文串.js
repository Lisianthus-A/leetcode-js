/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let obj = {};
    for (let char of s) {
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }

    let res = 0;
    for (let value of Object.values(obj)) {
        if (value % 2 === 0)  {
            res += value;
        } else {
            res += value - 1;
        }
    }
    if (res < s.length) {
        res++;
    }
    return res;
};