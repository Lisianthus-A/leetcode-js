/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    const helper = (idx, sum) => {
        if (idx >= nums.length) {
            sum === S && res++;
            return;
        }

        //+
        helper(idx + 1, sum + nums[idx]);
        //-
        helper(idx + 1, sum - nums[idx]);
    }

    let res = 0;
    helper(0, 0);
    return res;
};