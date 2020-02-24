/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        arr.push([...matrix[i]]);
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                matrix[i] = matrix[i].map(e => 0);
                for (let k = 0; k < arr.length; k++) {
                    matrix[k][j] = 0;
                }
            }
        }
    }
};