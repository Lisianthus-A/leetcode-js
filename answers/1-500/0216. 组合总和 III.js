/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const helper = (combine, num) => {
        if (combine.length === k) {
            combine.reduce((prev, curr) => prev + curr) === n && res.push(combine);
            return;
        }
        if (num > 9) {
            return;
        }
        helper([...combine, num], num + 1);
        helper(combine, num + 1);
    }
    const res = [];
    helper([], 1);
    return res;
};