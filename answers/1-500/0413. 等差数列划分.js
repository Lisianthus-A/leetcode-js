/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    // if (A.length <= 2) {
    //     return 0;
    // }
    let dp = [0];
    for (let i = 2; i < A.length; i++) {
        if (A[i - 2] - A[i - 1] === A[i - 1] - A[i]) {
            dp.push(dp[dp.length - 1] + 1);
        } else {
            dp.push(0);
        }
    }

    return dp.reduce((prev, curr) => prev + curr);
};