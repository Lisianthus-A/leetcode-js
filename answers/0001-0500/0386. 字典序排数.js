/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i + 1);
    }
    return arr.sort();
};