/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
    A.sort((a, b) => b - a);
    const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;
    for (let i = 0; i < A.length - 2; i++) {
        if (isTriangle(A[i], A[i + 1], A[i + 2])) {
            return A[i] + A[i + 1] + A[i + 2];
        }
    }

    return 0;
};