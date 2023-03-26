function findSubarrays(nums: number[]): boolean {
    const o = {};
    for (let i = 1; i < nums.length; ++i) {
        const sum = nums[i] + nums[i - 1];
        if (o[sum] === 0) {
            return true;
        }
        o[sum] = 0;
    }
    return false;
};