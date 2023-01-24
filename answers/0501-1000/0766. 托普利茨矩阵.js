/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    const isValid = (i, j, val) => {
        if (matrix[i][j] !== val) {
            return false;
        }

        if (matrix[i + 1] && matrix[i + 1][j + 1] !== undefined) {
            return isValid(i + 1, j + 1, val);
        }

        return true;
    }

    for (let i = 0; i < matrix[0].length; i++) {
        if (!isValid(0, i, matrix[0][i])) {
            return false;
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        if (!isValid(i, 0, matrix[i][0])) {
            return false;
        }
    }

    return true;
};