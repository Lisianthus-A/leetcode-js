/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let flag0 = nums[i - 1] === undefined || nums[i] > nums[i - 1];
        let flag1 = nums[i + 1] === undefined || nums[i] > nums[i + 1];
        if (flag0 && flag1) {
            return i;
        }
    }
};