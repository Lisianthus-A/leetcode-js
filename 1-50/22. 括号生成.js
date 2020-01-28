/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let fullArr = ['0'];
    //生成全排列，由fullArr保存
    for (let i = 1; i < n * 2; i++) {
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
    //根据fullArr生成括号数组
    let res = [];
    for (let i of fullArr) {
        let str = '';
        for (let j of i) {
            if (j % 2 === 0) {
                str += '(';
            } else {
                str +=')';
            }
        }
        res.push(str);
    }
    res = res.filter(isValid);
    let arr = [];
    for (let i of res) {  //去重
        if (arr.indexOf(i) === -1) {
            arr.push(i);
        }
    }
    res = arr;
    return res;
};
var isValid = function(s) {
    let relation = {  //对应关系
        ')': '(',
        '}': '{',
        ']': '['
    };
    let stack = [];
    //遇到左括号让其入栈，遇到右括号与栈内元素匹配
    for (let i of s) {
        switch(i) {
            case '(':
            case '{':
            case '[':
                stack.push(i);
                break;
            default:
                if (relation[i] !== stack.pop()) {
                    return false;
                }
        }
    }
    if (stack.length !== 0) {  //栈内还有左括号未匹配
        return false;
    }
    return true;
};