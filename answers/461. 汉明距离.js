/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let count = 0;
    while (x !== 0 && y !== 0) {
        if ((x & 1) !== (y & 1)) {
            count++;
        }
        x >>= 1;
        y >>= 1;
    }
    while (x !== 0) {
        if ((x & 1) !== 0) {
            count++;
        }
        x >>= 1;
    }

    while (y !== 0) {
        if ((y & 1) !== 0) {
            count++;
        }
        y >>= 1;
    }
    
    return count;
};