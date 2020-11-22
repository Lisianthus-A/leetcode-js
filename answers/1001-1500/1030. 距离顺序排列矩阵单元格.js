/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
    const res = [];
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            res.push([i, j]);
        }
    }

    return res.sort(([x1, y1], [x2, y2]) => Math.abs(x1 - r0) + Math.abs(y1 - c0) - Math.abs(x2 - r0) - Math.abs(y2 - c0));
};