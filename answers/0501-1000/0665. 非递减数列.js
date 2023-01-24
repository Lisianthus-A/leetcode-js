/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;
            if (count > 1) {
                return false;
            }
            if (nums[i - 1] > nums[i + 1]) {  //左 > 右
                nums[i + 1] = nums[i];
            } else {
                nums[i] = nums[i - 1];
            }
        }
    }

    return true;
};
