/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    return matrix.flat(1).sort((a, b) => a - b)[k - 1];
};