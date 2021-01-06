/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
    let sum;
    for (const row of wall) {
        sum = 0;
        for (let i = 0; i < row.length; i++) {
            sum += row[i];
            row[i] = sum;
        }
    }

    const obj = {};
    for (const row of wall) {
        for (const val of row) {
            obj[val] = (obj[val] + 1) || 1;
        }
    }

    delete obj[sum];

    let res = wall.length;
    for (const val of Object.values(obj)) {
        res = Math.min(wall.length - val, res);
    }

    return res;
};