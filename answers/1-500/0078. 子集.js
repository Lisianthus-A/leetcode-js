/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    for (let i of nums) {
        let n = res.length;
        for (let j = 0; j < n; j++) {
            res.push([...res[j], i]);
        }
        res.push([i]);
    }
    res.push([]);
    return res;
};