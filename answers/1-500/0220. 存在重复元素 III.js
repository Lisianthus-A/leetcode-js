/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            }
            if (Math.abs(i - j) <= k && Math.abs(nums[i] - nums[j]) <= t) {
                return true;
            }
        }
    }

    return false;
};