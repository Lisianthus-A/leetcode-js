function removeElement(nums: number[], val: number): number {
    let removed = 0;

    const swap = (a, b) => {
        [nums[a], nums[b]] = [nums[b], nums[a]];
    }

    for (let i = 0; i < nums.length - removed; ++i) {
        if (nums[i] === val) {
            swap(i, nums.length - removed - 1);
            ++removed;
            --i;
        }
    }

    return nums.length - removed;
};