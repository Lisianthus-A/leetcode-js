class SummaryRanges {
    private array: Array<number>;

    constructor() {
        this.array = [];
    }

    addNum(val: number): void {
        if (val > this.array[this.array.length - 1]) {
            this.array.push(val);
            return;
        }

        const index = this.find(val);
        if (index !== false) {  // 去重
            this.array.splice(index, 0, val);
        }
    }

    getIntervals(): number[][] {
        const res = [];

        let temp = [this.array[0]];
        for (let i = 1; i < this.array.length; ++i) {
            const lastNum = temp[temp.length - 1];
            if (this.array[i] === lastNum + 1) {
                temp.push(this.array[i]);
            } else {
                res.push([temp[0], lastNum]);
                temp = [this.array[i]];
            }
        }
        res.push([temp[0], temp[temp.length - 1]]);

        return res;
    }

    // 二分查找
    private find(val: number): number | false {
        let left = 0, right = this.array.length - 1;
        while (left <= right) {
            const mid = left + right >> 1;
            if (this.array[mid] === val) {
                return false;
            }

            if (this.array[mid] > val) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */