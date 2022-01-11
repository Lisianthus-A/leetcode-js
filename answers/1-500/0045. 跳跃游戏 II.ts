function jump(nums: number[]): number {
    if (nums.length === 1) {
        return 0;
    }

    const steps = [0];
    let startIndex = 0;

    for (let i = 1; i < nums.length; ++i) {
        steps[i] = 10001;
        for (let j = startIndex; j < i; ++j) {
            if (j + nums[j] >= i && steps[j] + 1 < steps[i]) {
                startIndex = j;
                steps[i] = steps[j] + 1;
            }
        }
    }

    return steps.slice(-1)[0];
};