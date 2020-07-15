/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {

    let res = Infinity;
    let arr = [];
    for (let i of nums) {
        arr.push(i);
        while (arr.reduce((a, b) => a + b, 0) >= s) {
            res = res < arr.length ? res : arr.length;
            arr.shift();
        }
    }

    return res === Infinity ? 0 : res;
};