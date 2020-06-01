/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s === '') {
        return true;
    }

    let arr = s.match(/\w/g);
    if (!arr) {
        return true;
    }
    return arr.join('').toLocaleLowerCase() === arr.reverse().join('').toLocaleLowerCase();
};