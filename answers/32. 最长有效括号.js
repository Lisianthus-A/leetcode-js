/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    //使用栈模拟一遍，不能匹配的括号位置用1表示
    //之后寻找arr中最长的连续0的长度即可
    const stack = [];
    const arr = new Array(s.length).fill(0);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);  //保存左括号的下标
        } else {
            if (stack.pop() === undefined) {  //栈中没有左括号了
                arr[i] = 1;
            }
        }
    }
    for (let i of stack) {  //没有被匹配的左括号
        arr[i] = 1;
    }

    let max = 0;
    let curr = 0;
    for (let i of arr) {
        if (!i && ++curr) {  //i为0
            max = Math.max(max, curr);
        } else {   //i为1
            curr = 0;
        }
    }
    return max;
};