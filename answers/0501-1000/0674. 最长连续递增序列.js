/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i];
        let count = 1;
        for (i++; i < nums.length; i++) {
            if (nums[i] > temp) {
                temp = nums[i];
                count++;
            } else {
                i--;
                break;
            }
        }
        res = Math.max(res, count);
    }

    return res;
};