/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (!nums.length) {
        return [];
    }
    
    let start = nums[0];
    let end = start;
    let res = [];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === end + 1) {
            end++;
        } else {
            if (start === end) {
                res.push(start + '');
            } else {
                res.push(start + '->' + end);
            }
            start = end = nums[i];
        }
    }
    if (start === end) {
        res.push(start + '');
    } else {
        res.push(start + '->' + end);
    }

    return res;
};