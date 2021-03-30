function searchMatrix(matrix: number[][], target: number): boolean {
    let i = 0;
    const len = matrix[0].length;
    while (matrix[i + 1] !== undefined && target > matrix[i][len - 1]) {
        ++i;
    }

    for (let j = 0; j < len; j++) {
        const num = matrix[i][j];
        if (num === target) {
            return true;
        }

        if (num > target) {
            break;
        }
    }

    return false;
};