/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0]) {  //起点有障碍物
        return 0;
    }
    let m = obstacleGrid.length;  //行
    let n = obstacleGrid[0].length;  //列
    obstacleGrid[0][0] = 1;
    //初始化第一行和第一列，使有通路的空位置为1，障碍物为0
    //初始化第一行
    for (let i = 1; i < n; i++) {
        if (obstacleGrid[0][i] || !obstacleGrid[0][i - 1]) {  //障碍物或左边无通路
            obstacleGrid[0][i] = 0;
        } else {
            obstacleGrid[0][i] = 1;
        }
    }
    //初始化第一列
    for (let i = 1; i < m; i++) {
        if (!obstacleGrid[i][0] && obstacleGrid[i - 1][0]) {  //空位置
            obstacleGrid[i][0] = 1;
        } else {  //障碍物
            obstacleGrid[i][0] = 0;
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (!obstacleGrid[i][j]) {  //空位置
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            } else {  //障碍物
                obstacleGrid[i][j] = 0;
            }
        }
    }
    //数组的值即为起点到该点的路径数
    return obstacleGrid[m - 1][n - 1];
};