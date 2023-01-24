/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let min = 1, max = 1, res = -Infinity;

    nums.forEach(value => {
        if (value < 0) {
            const saved = max;
            max = min;
            min = saved;
        }

        max = Math.max(value, max * value);
        min = Math.min(value, min * value);
        res = Math.max(res, max);
    });

    return res;
};