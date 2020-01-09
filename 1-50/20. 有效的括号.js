/**
 * @param {string} s
 * @return {boolean}
 */
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