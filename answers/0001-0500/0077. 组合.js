/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const helper = (num, arr) => {
        if (arr.length === k) {
            res.push(arr);
            return;
        }

        for (let i = num; i <= n; i++) {
            helper(i + 1, [...arr, i]);
        }
    }

    const res = [];

    helper(1, []);

    return res;
};