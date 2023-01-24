/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        switch(nums[i]) {
            case 0:
                nums.splice(i, 1);  //删除该数
                nums.unshift(0);  //在数组头部添加0
                break;
            case 2: 
                nums.splice(i, 1);  //删除
                nums.push(2);  //数组末尾添加2
                //当前索引后的值是否全为2，全为2则已排序好
                if (!nums.slice(i).every(e => e === 2)) {
                    i--;
                } else {
                    return;
                }
        }
    }
};