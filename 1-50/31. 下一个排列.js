/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i - 1] < nums[i]) {
            let num = nums[i];
            //找到索引值为i~nums.length间只比nums[i - 1]大的数
            for (let j = i; j < nums.length; j++) {
                if (nums[j] > nums[i - 1] && nums[j] < num) {
                    num = nums[j];
                }
            }
            //交换nums[i - 1]和num所在的元素的值
            let idx = nums.lastIndexOf(num);
            nums[idx] = nums[i - 1];
            nums[i - 1] = num;
            //反转i后的元素
            nums.splice(i, nums.length - i, ...nums.slice(i).reverse());
            return;
        }
    }
    //不存在下一个更大的排列
    nums.sort((a, b) => a - b);
};