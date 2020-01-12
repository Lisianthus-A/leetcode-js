/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        while(nums[i + 1] === num) {
            nums.splice(i + 1, 1);
        }
    }
    return nums.length;
};