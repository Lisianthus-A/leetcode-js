/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length) {  //空数组
        return false;
    }
    let idx = matrix[0].length - 1; //最后一个索引
    for (let i = 0; i < matrix.length; i++) {
        if (target > matrix[i][idx]) {  //找出目标值所在行
            continue;
        }
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
        return false;
    }
    return false;
};