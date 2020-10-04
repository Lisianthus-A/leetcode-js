/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
            }
        }
        res.push(count);
    }
    return res;
};