/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N <= 1) {
        return [0, 1][N];
    }
    let a = 0;
    let b = 1;
    while (N--) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return a;
};