/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    let fullArr = ['0'];
    //生成全排列，由fullArr保存
    for (let i = 1; i < nums.length; i++) {
        let len = fullArr.length;
        for (let j = 0; j < len; j++) {
            for (let k in fullArr[j]) {
                let arr = fullArr[j].split('');
                arr.splice(k, 0, i.toString());
                fullArr.push(arr.join(''));
            }
            fullArr.push(fullArr[j] + i.toString());
        }
        fullArr = fullArr.slice(len);
    }
    //根据fullArr和nums生成数组
    for (let i of fullArr) {
        let arr = [];
        for (let j of i) {
            arr.push(nums[j]);
        }
        res.push(arr);
    }
    //去重
    let strArr = [];  //存放res中每个数组元素中元素的字符串
    res = res.filter(e => {
        let str = e.join('');
        if (strArr.indexOf(str) === -1) {
            strArr.push(str);
            return true;
        } else {
            return false;
        }
    });
    return res;
};