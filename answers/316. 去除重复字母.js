/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const stack = [];
    while (s) {  //遍历字符串
        const idx = stack.indexOf(s[0]);
        if (!~idx) {  //栈中不存在当前字符
            //当前字符比栈顶的字典序小并且字符串中还有栈顶的字符
            while (s[0] < stack[stack.length - 1] && ~s.indexOf(stack[stack.length - 1])) {
                stack.pop();
            }
            stack.push(s[0]);
        }
        s = s.slice(1);
    }
    return stack.join('');
};