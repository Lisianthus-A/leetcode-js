/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    //统计arr1中的元素出现次数
    const counts = {};
    arr1.forEach(value => {
        counts[value] = counts[value] + 1 || 1;
    });

    //根据arr2进行排序
    const res = [];
    arr2.forEach(value => {
        const array = new Array(counts[value]).fill(value);
        res.push(...array);
        delete counts[value];  //删除已使用元素
    });
    
    //未在arr2出现过的元素
    const arr = [];
    for (const [key, value] of Object.entries(counts)) {
        const array = new Array(value).fill(+key);
        arr.push(...array);
    }
    arr.sort((a, b) => a - b);
    res.push(...arr);
    
    return res;
};