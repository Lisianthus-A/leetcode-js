/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    const res = [];

    //记录所有数字出现次数
    const obj = {}; 
    nums.forEach(value => {
        obj[value] = obj[value] ? obj[value] + 1 : 1;
    });

    //找出 出现超过count次的数字
    const count = parseInt(nums.length / 3);
    for (const [key, value] of Object.entries(obj)) {
        value > count && res.push(+key);
    }

    return res;
};