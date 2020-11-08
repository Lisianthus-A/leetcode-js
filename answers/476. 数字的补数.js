/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const arr = [];
    for (const char of num.toString(2)) {
        arr.push(char === '1' ? 0 : 1);
    }
    return +`0b${arr.join('')}`;
};