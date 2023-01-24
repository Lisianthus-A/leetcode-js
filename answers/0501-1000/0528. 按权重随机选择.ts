class Solution {
    private w: number[];
    constructor(w: number[]) {
        const arr: number[] = [];
        let sum: number = 0;
        for (const num of w) {
            sum += num;
            arr.push(sum);
        }
        this.w = arr;
    }

    pickIndex(): number {
        const sum: number = this.w.slice(-1)[0];
        const random: number = Math.random() * sum;
        for (let i = 0; ; i++) {
            if (random < this.w[i]) {
                return i;
            }
        }
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */