function countQuadruplets(nums: number[]): number {
    let res = 0;
    for (let b = 1; b < nums.length - 2; ++b) {
        const ab = {};
        // 先定下 b 的下标，计算 a + b 的所有可能
        for (let a = 0; a < b; ++a) {
            const n = nums[a] + nums[b];
            ab[n] = ab[n] + 1 || 1;
        }

        // 计算 d - c 的所有可能
        for (let c = b + 1; c < nums.length - 1; ++c) {
            for (let d = c + 1; d < nums.length; ++d) {
                const n = nums[d] - nums[c];
                if (ab[n]) {
                    res += ab[n];
                }
            }
        }
    }

    return res;
};