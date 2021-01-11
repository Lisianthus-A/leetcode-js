/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {

    const calcDistance = (a, b) => {
        const [x1, y1] = a;
        const [x2, y2] = b;
        const d = ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
        if (d === 0) {
            z = false;
            return;
        }
        s.add(d);
    }

    const s = new Set();
    let z = true;

    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            calcDistance(arguments[i], arguments[j]);
        }
    }

    return s.size === 2 && z;
};