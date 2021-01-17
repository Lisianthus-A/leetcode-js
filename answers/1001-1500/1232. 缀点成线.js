/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    if (coordinates.length === 2) {
        return true;
    }

    for (let i = 2; i < coordinates.length; i++) {
        const [x1, y1] = coordinates[i - 2];
        const [x2, y2] = coordinates[i - 1];
        const [x3, y3] = coordinates[i];
        if ((y3 - y2) * (x2 - x1) !== (y2 - y1) * (x3 - x2)) {
            return false;
        }
    }

    return true;
};