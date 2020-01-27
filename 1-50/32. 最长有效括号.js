/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let len;
    if (s.length % 2) {  //长度为奇数
        len = s.length - 1;
    } else {
        len = s.length;
    }
    while(len) {  //长度不为0时
        //滑动窗口，找出最长的有效括号
        for (let i = 0; i < s.length - len + 1; i++) {
            if (isValid(s.slice(i, i + len))) {
                return len;
            }
        }
        len -= 2;  //长度必然为偶数，每次自减2
    }
    return len;
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

