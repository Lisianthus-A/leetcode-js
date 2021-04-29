function findNumbers(nums: number[]): number {
    return nums.reduce((prev, curr) => String(curr).length % 2 ? prev : prev + 1, 0);
};