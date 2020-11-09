/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    return points.sort(([x1, y1], [x2, y2]) => x1 ** 2 + y1 ** 2 - x2 ** 2 - y2 ** 2).slice(0, K);
};