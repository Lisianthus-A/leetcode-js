/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let left = 1, right = 1;
    const res = [];
    for (const num of nums) {
        res.push(left);
        left *= num;
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = right * res[i];
        right *= nums[i];
    }
    return res;
};