/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    const arr = nums.slice().sort((a, b) => b - a);
    nums = nums.map(e => arr.indexOf(e) + 1 + '');
    nums[nums.indexOf('1')] = "Gold Medal";
    nums[nums.indexOf('2')] = "Silver Medal";
    nums[nums.indexOf('3')] = "Bronze Medal";
    return nums;
};