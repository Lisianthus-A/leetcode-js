/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    const newMatrix = [];
    const canReshape = nums.length * nums[0].length === r * c;  //是否可以重塑
    let row = -1, count = 0;
    if (canReshape) {
        //重塑矩阵
        for (const array of nums) {
            for (const val of array) {
                if (count === 0) {
                    newMatrix.push([]);
                    row++;
                }
                if (count++ < c) {
                    newMatrix[row].push(val);
                }
                if (count === c) {
                    count = 0;
                }
            }
        }

        return newMatrix;
    }

    return nums;
};