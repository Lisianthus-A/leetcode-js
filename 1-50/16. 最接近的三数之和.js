/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let dif = 999;  //与target的绝对差距
    let sum = 0;
    for (let i = 0; i < nums.length - 2; i++) {  //遍历数组，找出所有组合的绝对差距
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let nowSum = nums[i] + nums[j] + nums[k];
                if (Math.abs(target - nowSum) < dif) {
                    dif = Math.abs(target - nowSum);
                    sum = nowSum;
                }
            }
        }
    }
    return sum;
};