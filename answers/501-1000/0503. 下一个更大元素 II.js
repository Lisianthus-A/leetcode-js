/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const loopSearch = (value, index) => {
        for (let i = (index + 1) % nums.length; i !== index; i = (i + 1) % nums.length) {
            if (nums[i] > value) {
                return nums[i];
            }
        }
        return -1;
    }

    return nums.map(loopSearch);
};