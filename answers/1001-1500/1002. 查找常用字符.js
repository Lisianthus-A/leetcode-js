/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    const res = [];
    for (let char of new Set(A[0])) {
        let min = Infinity;
        for (let i = 0; i < A.length; i++) {
            let count = 0;
            for (let c of A[i]) {
                if (c === char) {
                    count++;
                }
            }
            min = Math.min(min, count);
            if (min === 0) {
                break;
            }
        }
        while (min--) {
            res.push(char);
        }
    }
    return res;
};