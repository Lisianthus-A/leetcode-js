function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return nums.reduce((prev, curr, idx) => prev + (idx % 2 === 0 ? curr : 0), 0);
};