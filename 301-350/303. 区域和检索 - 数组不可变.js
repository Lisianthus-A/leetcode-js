/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let res = 0;
    for (let idx = i; idx <= j; idx++) {
        res += this.arr[idx];
    }
    return res;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */