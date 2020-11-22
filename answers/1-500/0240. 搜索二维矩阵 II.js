/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i of matrix) {
        if (!!~i.indexOf(target)) {
            return true;
        }
    }
    return false;
};