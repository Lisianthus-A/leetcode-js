/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 2; i < nums.length; i++) {
        while (nums[i] === nums[i - 2]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};