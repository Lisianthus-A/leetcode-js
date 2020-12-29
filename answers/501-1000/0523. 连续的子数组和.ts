function checkSubarraySum(nums: number[], k: number): boolean {
    let sum;
    for (let i = 0; i < nums.length - 1; i++) {
        sum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum % k === 0 || sum === k) {
                return true;
            }
        }
    }
    return false;
};