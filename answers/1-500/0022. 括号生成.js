/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const helper = (left, right, str) => {
        if (left === n && left === right) {
            res.push(str);
            return;
        }
        //左括号未用完，添加左括号
        if (left < n) {
            helper(left + 1, right, str + '(');
        }
        //添加右括号后可闭合，并且右括号未用完
        if (left > right && right < n) {
            helper(left, right + 1, str + ')');
        }
    }

    const res = [];

    helper(0, 0, '');
    return res;
};