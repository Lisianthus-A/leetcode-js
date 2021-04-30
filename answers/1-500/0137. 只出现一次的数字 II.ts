function singleNumber(nums: number[]): number {
    const o = {};
    for (let i = 0; i < nums.length; ++i) {
        const n = nums[i];
        o[n] = o[n] + 1 || 1;
        if (o[n] === 3) {
            delete o[n];
        }
    }

    return Number(Object.keys(o)[0]);
};