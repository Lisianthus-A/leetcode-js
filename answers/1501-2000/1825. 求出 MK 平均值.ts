class MKAverage {
    m: number;
    k: number;
    nums: number[];
    sortedNums: number[];

    constructor(m: number, k: number) {
        this.m = m;
        this.k = k;
        this.nums = [];
        // 维护长度为 m 的排序后数组
        this.sortedNums = [];
    }

    binarySearch(num: number) {
        let left = 0, right = this.sortedNums.length;
        while (left <= right) {
            const mid = left + right >> 1;
            const v = this.sortedNums[mid];
            if (v === num) {
                return mid;
            }

            if (v > num) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

    addElement(num: number): void {
        // 在排序后数组删除倒数第 m 个添加到 nums 的数
        if (this.nums.length >= this.m) {
            const lastNum = this.nums[this.nums.length - this.m];
            this.deleteSortedElement(lastNum);
        }

        this.nums.push(num);

        if (num >= this.sortedNums[this.sortedNums.length - 1]) {
            this.sortedNums.push(num);
            return;
        }
        this.sortedNums.splice(this.binarySearch(num), 0, num);

    }

    deleteSortedElement(num: number) {
        this.sortedNums.splice(this.binarySearch(num), 1);
    }

    calculateMKAverage(): number {
        if (this.nums.length < this.m) {
            return -1;
        }

        let sum = 0;
        for (let i = this.k; i < this.sortedNums.length - this.k; ++i) {
            sum += this.sortedNums[i];
        }

        return sum / (this.m - 2 * this.k) >> 0;
    }
}

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */