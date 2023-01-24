/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const find = (value) => {
        const start = nums2.indexOf(value);
        for (let i = start; i < nums2.length; i++) {
            if (nums2[i] > value) {
                return nums2[i];
            }
        }
        return -1;
    }
    return nums1.map(find);
};