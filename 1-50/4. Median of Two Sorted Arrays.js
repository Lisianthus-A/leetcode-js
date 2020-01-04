/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort((a, b) => a - b);  //将nums1和nums2合并后排序，存入arr
    let len = arr.length;
    //数组长度为偶数则返回中间两项的平均值，为奇数则返回中间的一项
    return len % 2 === 0 ? (arr[len / 2] + arr[len / 2 - 1]) / 2 : arr[(len + 1) / 2 - 1]; 
};