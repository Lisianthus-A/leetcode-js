/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    //交换两个点的值
    const swap = ([x1, y1], [x2, y2]) => {
        const temp = matrix[x1][y1];
        matrix[x1][y1] = matrix[x2][y2];
        matrix[x2][y2] = temp;
    }

    //p1~p4 分别是矩阵四个角的点
    let p1 = [0, 0], p2 = [0, matrix.length - 1], p3 = [matrix.length - 1, 0], p4 = [matrix.length - 1, matrix.length - 1];
    let count = 0;  //记录交换次数
    let num = 0;  //层数
    while (matrix.length - 1 - 2 * num > 0) {
        swap(p1, p2);
        swap(p3, p4);
        swap(p1, p4);
        p1[1]++;
        p2[0]++;
        p3[0]--;
        p4[1]--;
        count++;
        if (count === matrix.length - 1 - 2 * num) {
            num++;
            count = 0;
            p1 = [num, num];
            p2 = [num, matrix.length - 1 - num];
            p3 = [matrix.length - 1 - num, num];
            p4 = [matrix.length - 1 - num, matrix.length - 1 - num];
        }
    }
};