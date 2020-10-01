/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (!nums.length) {  //length = 0
        return 0;
    }

    let dp = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {  //以当前数为序列尾元素
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {  //找到比当前数更小的数
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
    }

    return Math.max(...dp);
};