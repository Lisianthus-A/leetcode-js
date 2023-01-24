/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    nums.sort((a, b) => a - b);
    let res = 0;
    let count = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] === nums[i]) {
            count++;
        } else {
            let flag = false;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] - nums[i] === 1) {
                    flag = true;
                    count++;
                } else {
                    break;
                }
            }
            if (flag) {
                res = Math.max(res, count);
            }
            count = 1;
        }
    }

    return res;
};