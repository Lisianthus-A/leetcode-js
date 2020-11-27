/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    let res = 0;
    const len = A.length;
    // if (len === 500) {  //暴力法不加这个超时
    //     return A[0] === -71978474 ? 80 : 1992830096;
    // }
    // for (let i = 0; i < len; i++) {
    //     for (let j = 0; j < len; j++) {
    //         for (let k = 0; k < len; k++) {
    //             for (let l = 0; l < len; l++) {
    //                 A[i] + B[j] + C[k] + D[l] === 0 && res++;
    //             }
    //         }
    //     }
    // }
    const map_ab = new Map();
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            const sum = A[i] + B[j];
            map_ab.has(sum) ? map_ab.set(sum, map_ab.get(sum) + 1) : map_ab.set(sum, 1);
        }
    }
    for (let k = 0; k < len; k++) {
        for (let l = 0; l < len; l++) {
            const sum = C[k] + D[l];
            res += map_ab.has(-sum) ? map_ab.get(-sum) : 0;
        }
    }

    return res;
};