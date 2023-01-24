/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
    let shift = 0;
    while (m !== n) {
        m >>= 1;
        n >>= 1;
        shift++;
    }
    return m << shift;
};