/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
    const res = [];
    let num = 0;

    for (const b of A) {
        num *= 2;
        num += b;
        num %= 5;
        res.push(num % 5 === 0);
    }

    return res;
};