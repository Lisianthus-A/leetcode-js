/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    const o = {};
    let max = 0;
    let res = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (o[num]) {
            o[num].push(i);
        } else {
            o[num] = [i];
        }

        if (o[num].length > max) {
            max = o[num].length;
            res = o[num][max - 1] - o[num][0] + 1;
        } else if (o[num].length === max) {
            res = Math.min(o[num][max - 1] - o[num][0] + 1, res);
        }
    }

    return res;
};