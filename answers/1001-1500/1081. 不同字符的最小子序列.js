/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function(text) {
    const stack = [];
    while (text) {  //遍历字符串
        const idx = stack.indexOf(text[0]);
        if (!~idx) {  //栈中不存在当前字符
            //当前字符比栈顶的字典序小并且字符串中还有栈顶的字符
            while (text[0] < stack[stack.length - 1] && ~text.indexOf(stack[stack.length - 1])) {
                stack.pop();
            }
            stack.push(text[0]);
        }
        text = text.slice(1);
    }
    return stack.join('');
};