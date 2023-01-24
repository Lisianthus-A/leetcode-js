/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let i of tokens) {
        if (isNaN(+i)) {  //符号
            let num1 = stack.pop();
            let num2 = stack.pop();
            stack.push(parseInt(eval(`${num2} ${i} ${num1}`)));
        } else {
            stack.push(+i);
        }
    }
    return stack.reduce((acc, cur) => acc + cur);
};