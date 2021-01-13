/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let w = m, h = n;
    for (const [a, b] of ops) {
        w = Math.min(a, w);
        h = Math.min(b, h);
    }

    return w * h;
};