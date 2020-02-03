/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let arr = [];  //保存排序好的字符串
    let res = [];
    let idx = 0;  //res还未用到的索引
    //将strs内所有单词排序，所有不同的排序结果存入arr
    //如果排序后在arr找到相同的排序结果，则在相应的res数组中加入该单词
    for (let i of strs) {
        let str = i.split('').sort().join('');  //将单词排序
        let index = arr.indexOf(str);  
        if (index === -1) {  //在arr寻找是否已有排序后的结果
            arr.push(str);
            res[idx++] = [i];
        } else {
            res[index].push(i);
        }
    }
    return res;
};