/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 2) {
        return 0;
    }
    const isPrimes = num => {
        let s = Math.sqrt(num);
        for (let i =  2; i <= s; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    let res = 0;
    for (let i = 2; i < n; i++) {
        res += isPrimes(i) ? 1 : 0;
    }
    return res;
};