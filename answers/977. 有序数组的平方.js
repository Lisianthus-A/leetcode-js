/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    return A.map(e => e ** 2).sort((a, b) => a - b);
};