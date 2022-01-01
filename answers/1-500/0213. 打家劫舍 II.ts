function rob(nums: number[]): number {
    if (nums.length <= 3) {
        return Math.max(...nums);
    }

    let p0 = nums[0], p1 = Math.max(nums[0], nums[1]);
    let q0 = nums[1], q1 = Math.max(nums[1], nums[2]);
    for (let i = 2; i < nums.length; ++i) {
        const num = nums[i];
        if (i !== nums.length - 1) {
            const temp = p1;
            p1 = Math.max(p1, p0 + num);
            p0 = temp;
        }

        if (i > 2) {
            const temp = q1;
            q1 = Math.max(q1, q0 + num);
            q0 = temp;
        }
    }

    return Math.max(p1, q1);
};