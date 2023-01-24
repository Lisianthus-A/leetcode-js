function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) {
        return nums.length;
    }

    for (let i = 2; i < nums.length; ++i) {
        const n1 = nums[i - 2],
            n2 = nums[i - 1],
            n3 = nums[i];
        if (n1 === n2 && n2 === n3) {
            nums.splice(i--, 1);
        }
    }

    return nums.length;
};