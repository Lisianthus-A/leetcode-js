/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let res = 0;
    let min = Infinity;
    let max = -Infinity;
    for (const [start, end] of points) {
        min = Math.max(min, start);
        max = Math.min(max, end);
        if (min > max) {
            res++;
            min = start;
            max = end;
        }
    }

    return res;
};