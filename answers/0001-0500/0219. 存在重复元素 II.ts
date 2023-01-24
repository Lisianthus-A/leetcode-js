function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const obj: Record<string, number> = {};
    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];
        if (i - obj[num] <= k) {
            return true;
        }
        obj[num] = i;
    }

    return false;
};