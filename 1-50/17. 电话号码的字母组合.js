/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let phone = {  //电话数字到字母的映射
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    let arr = [];
    for (let i of digits) {
        arr = merge(arr, phone[i]);
    }
    return arr;
};

const merge = (arr, str) => {  //将str每个字符与arr已有字符串进行组合
    let newArr = [];
    if (arr.length === 0) {  //arr是空数组
        for (let i of str) {
            newArr.push(i);
        }
    } else {  //非空数组
        for (let i of arr) {  //将arr已有字符串与str组合，存入newArr
            for (let j of str) {
                newArr.push(i + j);
            }
        }
    }
    return newArr;
}