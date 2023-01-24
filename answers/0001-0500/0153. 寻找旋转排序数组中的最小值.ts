function findMin(nums: number[]): number {
    let res = Infinity;
    for (let i = 0, len = nums.length; i < len; ++i) {
        res = nums[i] < res ? nums[i] : res;
    }
    return res;
};