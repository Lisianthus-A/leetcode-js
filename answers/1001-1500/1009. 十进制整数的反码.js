/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    const arr = [];
    for (const char of N.toString(2)) {
        arr.push(char === '1' ? 0 : 1);
    }
    return +`0b${arr.join('')}`;
};