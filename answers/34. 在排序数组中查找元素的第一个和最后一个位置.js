/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let first, last;
        if (nums[i] === target) {
            first = i;
            while(nums[i] === target) {
                last = i;
                i++;
            }
            return [first, last];
        }
    }
    return [-1, -1];
};