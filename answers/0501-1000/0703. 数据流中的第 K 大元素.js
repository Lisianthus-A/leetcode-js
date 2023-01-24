/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.arr = nums.sort((a, b) => a - b);
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (val > this.arr[this.arr.length - 1]) {
        this.arr.push(val);
    } else {
        const index = this.find(val);
        this.arr.splice(index, 0, val);
    }

    return this.arr[this.arr.length - this.k];
};

//二分查找索引
KthLargest.prototype.find = function(val) {
    let left = 0, right = this.arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (this.arr[mid] === val) {
            return mid;
        }

        if (this.arr[mid] > val) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */