/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    const diff = (A.reduce((prev, curr) => prev + curr) - B.reduce((prev, curr) => prev + curr)) / 2;
    for (const num of A) {
        for (const num2 of B) {
            const dif = num - num2;
            if (dif === diff) {
                return [num, num2];
            }
        }
    }

};