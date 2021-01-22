/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    const arr = K.toString().split('');
    while (A.length < arr.length) {
        A.unshift(0);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        A[A.length - arr.length + i] += +arr[i];
    }

    for (let i = A.length - 1; i > 0; i--) {
        if (A[i] >= 10) {
            A[i] -= 10;
            A[i - 1]++;
        }
    }
    
    if (A[0] >= 10) {
        A[0] -= 10;
        A.unshift(1);
    }

    return A;
};