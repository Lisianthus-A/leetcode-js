/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr[i] = i + 1;
    }
    for (const num of nums) {
        arr[num - 1] = 0;
    }
    return arr.filter(e => e !== 0);
};