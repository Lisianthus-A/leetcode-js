/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let arr = [];
    let ret = [];
    nums = nums.sort((a, b) => a - b);  //排序
    for (let i = 0; i < nums.length - 3; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {  //大于target说明后续元素不满足条件
                break;
        }
        for (let j = i + 1; j < nums.length - 2; j++) {
            let left = j + 1;  //左索引
            let right = nums.length - 1;  //右索引
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    arr.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                } else if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }
    let hash = [];  //帮助arr去重
    for (let i of arr) {
        if (hash.indexOf(i.join()) === -1) {
            hash.push(i.join());
            ret.push(i);
        }
    }
    return ret;
};