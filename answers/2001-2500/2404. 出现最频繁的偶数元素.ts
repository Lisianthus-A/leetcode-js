function mostFrequentEven(nums: number[]): number {
    let res = -1;
    let count = 0;
    const m = {};
    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];
        if (nums[i] % 2 === 0) {
            m[num] = m[num] + 1 || 1;
            if (m[num] > count) {
                count = m[num];
                res = num;
            } else if (m[num] === count && res > num) {
                res = num;
            }
        }
    }

    return res;
};