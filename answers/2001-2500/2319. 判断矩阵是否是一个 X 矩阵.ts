function checkXMatrix(grid: number[][]): boolean {
    const lastIndex = grid.length - 1;
    const isDiagonal = (x: number, y: number) => {
        if (x === y) {
            return true;
        }

        if (lastIndex - x === y) {
            return true;
        }

        return false;
    };

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            const v = grid[i][j];
            if (isDiagonal(i, j)) {
                if (v === 0) {
                    return false;
                }
            } else if (v !== 0) {
                return false;
            }
        }
    }

    return true;
};