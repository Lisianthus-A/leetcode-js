/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    //数组的值代表起点到该点的最小路径
    let arr = [];
    let m = grid[0].length;  //列数
    let n = grid.length;  //行数
    for (let i = 0; i < n; i++) {  //添加n个空行
        arr.push([]);
    }
    //处理第一行
    arr[0].push(grid[0][0]);
    for (let i = 1; i < m; i++) {
        arr[0][i] = arr[0][i - 1] + grid[0][i];
    }
    //处理第一列
    for (let i = 1; i < n; i++) {
        arr[i][0] = arr[i - 1][0] + grid[i][0];
    }
    //处理剩余部分
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            arr[i][j] = grid[i][j] + Math.min(arr[i - 1][j], arr[i][j - 1]);
        }
    }
    return arr[n - 1][m - 1];
};