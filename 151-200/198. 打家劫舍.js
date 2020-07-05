/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let len = nums.length;
    if (!len) {  //空数组
        return 0;
    }

    if (len <= 2) {  //数组长度小于2
        return Math.max(...nums);
    }

    for (let i = 2; i < len; i++) {
        nums[i] += Math.max(...nums.slice(0, i - 1));
    }
    return Math.max(nums[len - 1], nums[len - 2]);
};