/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let m = new Map();
    for (let i of nums) {
        if (m.has(i)) {
            m.set(i, m.get(i) + 1);
        } else {
            m.set(i, 1);
        }
    }

    let count = nums.length / 2;
    for (let [key, value] of m) {
        if (value > count) {
            return key;
        }
    }
};