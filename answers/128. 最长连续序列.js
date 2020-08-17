/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0 || nums.length === 1) {
        return nums.length;
    }
    nums = Array.from(new Set(nums));
    let max = 0;
    let curr = 1;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1] - 1) {
            curr++;
        } else {
            max = Math.max(max, curr);
            curr = 1;
        }
    }
    max = Math.max(max, curr);
    return max;
};