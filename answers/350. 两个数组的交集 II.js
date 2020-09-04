/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let result = [];
    let arr = [];

    //获取所有交集
    for (let i of new Set(nums1)) {
        if (nums2.includes(i)) {
            arr.push(i);
        }
    }


    for (let i of arr) {
        //该数在两数组中出现次数的最小值
        let min = Math.min(
            nums1.reduce((a, b) => b === i ? a + 1 : a, 0),
            nums2.reduce((a, b) => b === i ? a + 1 : a, 0)
        );
        while (min--) {
            result.push(i);
        }
    }

    return result;

};