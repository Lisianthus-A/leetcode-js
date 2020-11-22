/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.match(/[\w!,'?~+.-]+/g);
    if (!arr) {
        return '';
    }
    return arr.reverse().join(' ');
};