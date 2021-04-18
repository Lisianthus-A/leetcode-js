function removeDuplicates(nums: number[]): number {
    if (nums.length <= 1) {
        return nums.length;
    }

    for (let i = 1; i < nums.length; ++i) {
        const pre = nums[i - 1];
        pre === nums[i] && nums.splice(i--, 1);
    }

    return nums.length;
};