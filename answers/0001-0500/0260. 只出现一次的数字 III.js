/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let arr = [];
    for (let i of nums) {
        let idx = arr.indexOf(i);
        if (idx === -1) {
            arr.push(i);
        } else {
            arr.splice(idx, 1);
        }
    }
    return arr;
};