/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    for (let i of nums) {
        res ^= i;
    }
    return res;
};