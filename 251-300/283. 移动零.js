/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let cnt = 0;
    for (let i = 0; i < nums.length - cnt; i++) {
        !nums[i] && ++cnt ? nums.push(...nums.splice(i--, 1)) : null;
    }
};