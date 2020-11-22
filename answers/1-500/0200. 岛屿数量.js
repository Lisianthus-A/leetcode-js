/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //标记所有统计过的岛
    const foo = (i, j) => {
        grid[i][j] = 's';
        if (grid[i - 1] && grid[i - 1][j] === '1') {
            foo(i - 1, j);
        }
        if (grid[i][j + 1] === '1') {
            foo(i, j + 1);
        }
        if (grid[i + 1] && grid[i + 1][j] === '1') {
            foo(i + 1, j);
        }
        if (grid[i][j - 1] === '1') {
            foo(i, j - 1);
        }
    }
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                foo(i, j);
                res++;
            }
        }
    }


    return res;
};