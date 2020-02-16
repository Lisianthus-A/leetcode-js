/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //数组的值即为起点到该点的路径数
    let arr = [];
    for (let i = 0; i < m; i++) {
        arr.push([1]);
    }
    for (let i = 0; i < n - 1; i++) {
        arr[0].push(1);
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
        }
    }
    return arr[m - 1][n - 1];
};