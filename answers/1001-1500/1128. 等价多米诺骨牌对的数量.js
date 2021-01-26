/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let res = 0;
    const o = {};
    for (const [a, b] of dominoes) {
        const key = a > b ? `${a}${b}` : `${b}${a}`;
        if (o[key]) {
            res += o[key];
        }
        o[key] = o[key] + 1 || 1;
    }

    return res;
};