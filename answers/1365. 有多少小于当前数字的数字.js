/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const arr = nums.slice().sort((a, b) => a - b);
    return nums.map(e => arr.indexOf(e));
};