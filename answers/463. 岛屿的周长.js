/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    const adjacentLength = (i, j) => {  //相邻的岛屿数
        let len = 0;
        if (grid[i - 1] && grid[i - 1][j]) {
            len++;
        }
        if (grid[i + 1] && grid[i + 1][j]) {
            len++;
        }
        if (grid[i][j - 1]) {
            len++;
        }
        if (grid[i][j + 1]) {
            len++;
        }
        return len;
    }
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                res += 4 - adjacentLength(i, j);
            }
        }
    }
    return res;
};