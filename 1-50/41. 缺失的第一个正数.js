/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (let i = 1; ;i++) {
        if (nums.indexOf(i) === -1) {
            return i;
        }
    }
};