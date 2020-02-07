/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i > max) {  //该位置无法到达
            return false;
        }
        max = Math.max(max, i + nums[i]);
        if (max >= len - 1) {
            return true;
        }
    }
};