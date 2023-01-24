/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let strArray = str.split(' ');
    if (strArray.length !== pattern.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        if (pattern.indexOf(pattern[i]) != strArray.indexOf(strArray[i])) {
            return false;
        }
    }
    return true;
};