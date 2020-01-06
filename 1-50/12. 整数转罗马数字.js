/**
 * @param {number} num
 * @return {string}
 */
//把传入的数字转变为罗马数字。
var intToRoman = function(num) {
    let str = '';
    let ro = {  //罗马字符与数字的对应关系
        'M' : 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    };
    for (let i in ro) {
        while (num / ro[i] >= 1) {
            num -= ro[i];
            str += i;
        }
    }
    return str;
};