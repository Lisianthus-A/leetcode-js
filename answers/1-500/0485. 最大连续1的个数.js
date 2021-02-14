/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0, count = 0;
    for (const num of nums) {
        if (num) {
            count++;
            res = Math.max(res, count);
        } else {
            count = 0;
        }
    }

    return res;
};