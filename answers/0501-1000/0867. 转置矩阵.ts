function transpose(matrix: number[][]): number[][] {
    const res: Array<Array<number>> = new Array(matrix[0].length).fill(0).map(() => []);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            res[j].push(matrix[i][j]);
        }
    }

    return res;
};