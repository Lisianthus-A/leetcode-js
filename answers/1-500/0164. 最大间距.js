/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let max = -Infinity;
    for (let i = 0; i < nums.length - 1; i++) {
        let diff = Math.abs(nums[i] - nums[i + 1]);
        max = max < diff ? diff : max;
    }

    return max;
};