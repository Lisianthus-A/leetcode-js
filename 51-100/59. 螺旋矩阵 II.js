/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = [];
    let num = 1;
    let l = 0, r = n - 1, t = 0, b = n - 1;
    //添加n个空数组
    for (let i = 0; i < n; i++) {
        res.push([]);
    }
    while (num <= n * n) {
        //向右添加数字
        for (i = l; i <= r; i++) {
            res[t][i] = num++;
        }
        t++;
        //向下添加数字
        for (i = t; i <= b; i++) {
            res[i][r] = num++;
        }
        r--;
        //向左添加数字
        for (let i = r; i >= l; i--) {
            res[b][i] = num++;
        }
        b--;
        //向上添加数字
        for (let i = b; i >= t; i--) {
            res[i][l] = num++;
        }
        l++;
    }
    return res;
};