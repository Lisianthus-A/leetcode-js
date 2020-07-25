/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let arr = [];
    for (let i of nums) {
        if (arr.indexOf(i) !== -1) {
            return true;
        }

        if (arr.length < k) {
            arr.push(i);
        } else {
            arr.push(i);
            arr.shift();
        }
    }

    return false;
};