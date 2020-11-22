/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const obj = {};
    const res = [];

    for (let i of nums) {
        if (obj[i]) {
            obj[i].val++;
        }else {
            obj[i] = {num: i, val: 1};
        }
    }

    const arr = [];
    for (let [key, value] of Object.entries(obj)) {
        arr.push(value);
    }
    arr.sort((a, b) => b.val - a.val);

    for (let i = 0; i < k; i++) {
        res.push(arr[i].num);
    }

    return res;
};