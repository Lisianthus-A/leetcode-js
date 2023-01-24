/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    if (!b.length) {
        return 1;
    }
    const myPow = (n, k) => {
        n %= base;
        let res = 1;
        for (let i = 0; i < k; i++) {
            res *= n;
            res %= base;
        }
        return res;
    }
    const base = 1337;
    const last = b.pop();
    const part1 = myPow(a, last);
    const part2 = myPow(superPow(a, b), 10);

    return part1 * part2 % base;
};