/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let i of nums) {
        if (nums.indexOf(i) === nums.lastIndexOf(i)) {
            return i;
        }
    }
};