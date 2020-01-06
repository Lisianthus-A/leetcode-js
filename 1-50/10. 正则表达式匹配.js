/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (s.match(p) === null) {
        return false;
    } else {
        return s.match(p).join('') === s;
    }
};