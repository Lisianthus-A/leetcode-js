/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let tIndex = 0;
    for (let char of s) {
        let isMatch = false;
        while (tIndex < t.length) {
            if (t[tIndex++] === char) {
                isMatch = true;
                break;
            }
        }
        if (!isMatch) {
            return false;
        }
    }

    return true;
};