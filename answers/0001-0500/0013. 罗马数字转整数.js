/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0;
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
        while (s[0] === i || s[0] + s[1] === i) {
            let idx = s.indexOf(i);
            num += ro[i];
            s = s.slice(idx + i.length);
        }
    }
    return num;
};