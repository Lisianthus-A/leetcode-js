/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.indexOf(target) !== -1) {  //目标值存在于数组中
        return nums.indexOf(target);
    }
    for (let i = 0; i < nums.length; i++) {  //数组中有元素大于目标值
        if (target < nums[i]) {
            return i;
        }
    }
    return nums.length;  //数组中元素不大于目标值
};