class NumArray {
    private sums: Array<number>;
    constructor(nums: number[]) {
        this.sums = [];
        let sum = 0;
        for (const num of nums) {
            sum += num;
            this.sums.push(sum);
        }
    }

    sumRange(i: number, j: number): number {
        return this.sums[j] - (this.sums[i - 1] || 0);
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */