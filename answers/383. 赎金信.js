/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (let i of ransomNote) {
        if (magazine.includes(i)) {
            magazine = magazine.replace(i, '');
        } else {
            return false;
        }
    }
    return true;
};