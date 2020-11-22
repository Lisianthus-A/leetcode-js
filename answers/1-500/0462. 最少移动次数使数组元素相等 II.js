/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    const mid = nums[parseInt(nums.length / 2)];
    return nums.reduce((prev, curr) => prev + Math.abs(curr - mid), 0);
};