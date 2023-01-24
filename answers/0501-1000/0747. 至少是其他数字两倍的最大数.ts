function dominantIndex(nums: number[]): number {
    if (nums.length === 1) {
        return 0;
    }
    let maxIndex = 0;
    let max = nums[0];
    let preMax = -Infinity;
    for (let i = 1; i < nums.length; ++i) {
        const num = nums[i];
        if (num > max) {
            preMax = max;
            maxIndex = i;
            max = num;
        } else if (num > preMax) {
            preMax = num;
        }
    }

    if (max >= 2 * preMax) {
        return maxIndex;
    }

    return -1;
};