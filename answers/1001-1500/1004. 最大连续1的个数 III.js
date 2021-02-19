/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let res = 0;

    for (let i = 0; i < A.length; i++) {

        let count = 0, useK = 0;
        for (let j = i; j < A.length; j++) {
            !A[j] && useK++;
            if (useK > K) {
                break;
            }
            count++;
        }

        res = Math.max(res, count);
    }

    return res;
};