/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    for (let i of nums) {
        let n = res.length;
        for (let j = 0; j < n; j++) {
            res.push([...res[j], i]);
        }
        res.push([i]);
    }
    //去重
    res.map(e => e.sort((a, b) => a - b));
    let arr = [];
    for (let i = 0; i < res.length; i++) {
        let str = res[i].join('');
        if (arr.indexOf(str) === -1) {
            arr.push(str);
        } else {
            res.splice(i, 1);
            i--;
        }
    }
    res.push([]);
    return res;
};