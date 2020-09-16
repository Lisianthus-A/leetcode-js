/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const helper = (combine, unselect) => {  //已选数字数组  未选数字数组
        if (unselect.length === 0) {
            res.push(combine);
            return;
        }
        for (let i = 0; i < unselect.length; i++) {  //选择未选数字数组中的数字
            helper([...combine, unselect[i]], [...unselect.slice(0, i), ...unselect.slice(i + 1)]);
        }
    }

    const res = [];

    helper([], nums);

    return res;
};