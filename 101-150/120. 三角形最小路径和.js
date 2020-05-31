/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    //动态规划出每条路径的和
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {

            //左上的数
            let num1 = triangle[i - 1][j - 1] !== undefined ? triangle[i - 1][j - 1] : Infinity;

            //右上的数
            let num2 = triangle[i - 1][j] !== undefined ? triangle[i - 1][j] : Infinity;
            triangle[i][j] += Math.min(num1, num2);
        }
    }

    //返回最后一行的最小值
    return Math.min(...triangle[triangle.length - 1]);
};