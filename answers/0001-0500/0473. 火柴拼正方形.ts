function makesquare(nums: number[]): boolean {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 4 !== 0 || !nums.length) {
        return false;
    }

    const helper = (idx: number, sums = new Array(4).fill(sum / 4)): boolean => {
        if (idx > nums.length) {
            return false;
        }

        let flag = 0;
        for (const sum of sums) {
            if (sum < 0) {
                return false;
            } else if (sum === 0) {
                flag++;
            }
        }
        if (flag === 4) {
            return true;
        }

        return helper(idx + 1, [sums[0] - nums[idx], sums[1], sums[2], sums[3]])
            || helper(idx + 1, [sums[0], sums[1] - nums[idx], sums[2], sums[3]])
            || helper(idx + 1, [sums[0], sums[1], sums[2] - nums[idx], sums[3]])
            || helper(idx + 1, [sums[0], sums[1], sums[2], sums[3] - nums[idx]]);
    }

    return helper(0);
};